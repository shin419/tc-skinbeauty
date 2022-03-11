<template>
  <div class="q-pa-md">
    <div class="row justify-end">
      <q-btn label="Làm mới" color="green" unelevated class="q-my-sm" @click="getData(true)" />
    </div>
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="index" square
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            <div>
              <p>{{ props.row.gender }} - {{ props.row.name }}</p>
              <p>{{ props.row.phone }}</p>
              <p>{{ $util.formatDay(props.row.time) }}</p>
            </div>
          </q-td>
          <q-td key="address" :props="props">
            <div>
              <p><strong>Tỉnh/Thành phố :</strong> <span class="q-ml-sm">{{ props.row.city }}</span></p>
              <p><strong>Quận/Huyện :</strong> <span class="q-ml-sm">{{ props.row.district }}</span></p>
              <p><strong>Phường/Xã :</strong> <span class="q-ml-sm">{{ props.row.ward }}</span></p>
              <p><strong>Địa chỉ :</strong> <span class="q-ml-sm">{{ props.row.address }}</span></p>
            </div>
          </q-td>
          <q-td key="sanpham" :props="props">
            <div>
              <p class="text-bold">{{ props.row.sanpham && props.row.sanpham.name }}</p>
              <p><strong>Ghi chú:</strong> <span class="q-ml-sm">{{ props.row.note }}</span></p>
              <p><strong>SL:</strong> <span class="q-ml-sm">{{ props.row.sanpham && props.row.sanpham.amount }}</span></p>
              <p><strong>Shiping:</strong> <span class="q-ml-sm">{{ $formatNumber(props.row.shipping) }}</span></p>
              <p><strong>Tổng tiền:</strong> <span class="q-ml-sm">{{ $formatNumber(props.row.total) }}</span></p>
            </div>
          </q-td>
          <q-td key="status" :props="props">{{ props.row.status || 'Chưa đóng gói' }}</q-td>
          <q-td key="action" :props="props">
            <q-btn icon="edit" round unelevated size="sm" color="amber-9" @click="prop = props; dialog = !dialog">
              <q-tooltip>
                Cập nhật trạng thái
              </q-tooltip>
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-dialog v-model="dialog" square>
      <q-card class="dialog-thanhtoan q-pa-md">
        <div class="row justify-between items-center">
          <p class="text-h5">Cập nhật trạng thái</p>
          <q-btn icon="close" flat round v-close-popup/>
        </div>
        <div class="q-mt-md">
          <q-input dense v-model="status" outlined type="textarea" placeholder="Trạng thái hiện tại" />
        </div>
        <div class="row justify-end q-mt-md">
          <q-btn icon="done" label="Xong" color="green" @click="setStatus"/>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      status: '',
      prop: {},
      columns: [
        { name: 'name', label: 'Khách hàng', align: 'left', sortable: true },
        { name: 'address', label: 'Địa chỉ', align: 'left', sortable: true },
        { name: 'sanpham', label: 'Sản phẩm', align: 'left', sortable: true },
        { name: 'status', label: 'Trạng thái', align: 'center', sortable: true },
        { name: 'action', label: 'Hành động', align: 'right' }
      ],
      rows: []
    }
  },
  methods: {
    async getData(isReload) {
      this.rows = await this.$query('/hoadons')
      if (isReload) {
        this.$util.ShowNotify('Làm mới dữ liệu thành công')
      }
    },
    setStatus () {
      if (this.status && this.status !== '') {
        let { row, rowIndex} = this.prop
        let data = this.$util.cloneVal(row)
        data.status = this.status
        this.$post('hoadons/' + row.key, data)
          .then(() => {
            this.rows[rowIndex].status = this.status
            this.status = ''
            this.dialog = false
            this.$util.ShowNotify('Cập nhật trạng thái thành công')
          })
          .catch(e => {
            this.$util.ShowNotify(e.message, true)
          });
      }
    }
  },
  created() {
    this.getData()
  }
}
</script>

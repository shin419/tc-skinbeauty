<template>
  <div>
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="phone"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="phone" :props="props">{{ props.row.phone }}</q-td>
          <q-td key="time" :props="props">{{ $util.formatDay(props.row.time) }}</q-td>
          <q-td key="status" :props="props">{{ props.row.status || 'Chưa liên hệ' }}</q-td>
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
      prop: {},
      status: '',
      columns: [
        { name: 'phone', label: 'Số điện thoại', align: 'left', sortable: true },
        { name: 'time', label: 'Thời gian', align: 'center', sortable: true },
        { name: 'status', label: 'Trạng thái', align: 'center', sortable: true },
        { name: 'action', label: 'Hành động', align: 'right' }
      ],
      rows: []
    }
  },
  methods: {
    async getData() {
      this.rows = await this.$query('/dangkys')
    },
    setStatus () {
      if (this.status && this.status !== '') {
        let data = this.$util.cloneVal(this.prop.row)
        data.status = this.status
        this.$post('dangkys/' + data.phone, data)
          .then(() => {
            this.rows[this.prop.rowIndex].status = this.status
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

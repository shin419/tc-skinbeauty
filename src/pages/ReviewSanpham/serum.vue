<link rel="stylesheet" href="../../../../shop/src/css/app.css">
<template>
    <div>
      <div class="row justify-center bg">
        <div class="size-screen row">
          <div class="col-12 col-sm-6 text-white row justify-center">
            <div class="q-mt-md q-pa-md col-9">
              <q-img width="150px" src="~assets/logo.png" style="margin-left: 20px" />
              <p class="text-h6 col-12 q-mt-md">TC SKIN BEAUTY</p>
              <p class="text-h4">VITAMIN B5</p>
              <p class="q-ma-none text-italic">
                Vitamin B5 là khắc tinh của làn da dầu bởi nó kích thích cơ thể sản sinh ra coenzym A, một chất có khả năng phân giải lượng dầu thừa tồn tại trên da, giúp da tránh được nguy cơ nổi mụn.
              </p>
            </div>
            <div class="col-9 q-px-md">
              <span class="q-ml-sm text-bold text-h6">{{$formatNumber(price)}}</span>  <span class="q-ml-sm text-strike">{{$formatNumber(279000)}}</span>
            </div>
            <div class="row col-9 q-pa-md">
              <q-btn @click="dialog = true" label="Mua ngay" icon="shopping_cart" rounded outline color="white" class="col-12 btn"/>
            </div>
          </div>
          <div class="col-12 col-sm-6 row items-end">
            <q-img src="~assets/img-serum.png" />
          </div>
        </div>
      </div>
      <div class="row justify-center">
        <div class="size-screen padding-bot row">
          <div class="col-12 col-sm-4 q-pa-md q-py-lg style-box">
            <q-img src="https://demo.comdy.vn/landing-page-ban-my-pham-bot-lam-sang-da-vitabrid-c12-6/img/features/3.jpg" />
            <p class="text-h6 q-mt-md text-center text-bold colortext">GIẢM MỤN, MỜ THÂM</p>
            <p class="text-center">Vitamin C Giúp ngăn chặn hoạt động của các tế bào sắc tố. Axit A elaic Có công dụng giúp kháng viêm và làm mờ các đốm sắc tố. Hydroquinone Giúp ngăn chặn hoạt động của các tế bào sắc tố một cách hiệu quả.</p>
          </div>
          <div class="col-12 col-sm-4 q-pa-md q-py-lg style-box">
            <q-img src="https://demo.comdy.vn/landing-page-ban-my-pham-bot-lam-sang-da-vitabrid-c12-6/img/features/2.jpg" />
            <p class="text-h6 q-mt-md text-center text-bold colortext">ĐẨY LÙI LÃO HÓA</p>
            <p class="text-center">Vitamin C Là chất chống oxy hóa mạnh, tốt cho việc điều trị các nếp nhăn, tình trạng da xỉn màu và các đốm nâu. Vitamin E Là một trong những chất chống oxy hóa nổi tiếng giúp bảo vệ màng tế bào & ngăn ngừa giảm thiểu collagen</p>
          </div>
          <div class="col-12 col-sm-4 q-pa-md q-py-lg style-box">
            <q-img src="https://demo.comdy.vn/landing-page-ban-my-pham-bot-lam-sang-da-vitabrid-c12-6/img/features/1.jpg" />
            <p class="text-h6 q-mt-md text-center text-bold colortext">DƯỠNG DA TRẮNG SÁNG</p>
            <p class="text-center">Niacinamide hay Vitamin B3 là một chất dinh dưỡng thiết yếu giúp kích thích sự hoạt động, phát triển và bổ sung của các tế bào da. Sinh tố này đóng một vai trò quan trọng trong quá trình tẩy tế bào chết tự nhiên ở lớp biểu bì (lớp da trên cùng) khi các tế bào da mới được sản sinh để thay thế những tế bào da chết hoặc bị hư hỏng.</p>
          </div>
        </div>
      </div>
      <div class="row justify-center bg-section">
        <div class="size-screen padding-bot">
          <p class="text-h5 text-center text-bold">TC SKIN BEAUTY VITAMIN B5 </p>
          <p class="text-center q-mt-md">
            Vitamin B5 là khắc tinh của làn da dầu bởi nó kích thích cơ thể sản sinh ra coenzym A, một chất có khả năng phân giải lượng dầu thừa tồn tại trên da, giúp da tránh được nguy cơ nổi mụn.
          </p>
          <div class="row q-mt-md">
            <div class="col-12 col-sm-6 q-pa-md">
              <p>Vitamin B5 giúp loại bỏ môi trường phát triển mụn, giúp da trở nên mịn màng hơn. Trái lại, việc thiếu vitamin B5 khiến quá trình trao đổi chất nhờn diễn ra ít dần đi, sự mất cân bằng hóc môn khiến da nhiều dầu nhờn, bít tắc lỗ chân lông, khiến da nhờn kém duyên và dễ nổi mụn.</p>
              <p class="q-mt-md">Vitamin B5 là khắc tinh của làn da dầu bởi nó kích thích cơ thể sản sinh ra coenzym A, một chất có khả năng phân giải lượng dầu thừa tồn tại trên da, giúp da tránh được nguy cơ nổi mụn. Lỗ chân lông thông thoáng còn giúp loại bỏ môi trường phát triển mụn, giúp da trở nên mịn màng hơn. Trái lại, việc thiếu vitamin B5 khiến quá trình trao đổi chất nhờn diễn ra ít dần đi, sự mất cân bằng hóc môn khiến da nhiều dầu nhờn, bít tắc lỗ chân lông, khiến da nhờn kém duyên và dễ nổi mụn.</p>
              <p class="q-mt-md">Vitamin B5 được xem là thành phần tối quan trọng trong việc nuôi dưỡng làn da nhạy cảm bởi nó có thể làm dịu nhanh những nốt mụn nhỏ li ti, làm mềm da và dịu các vết mẩn đỏ nhanh chóng. Bên cạnh đó, sử dụng các sản phẩm có chứa thành phần vitamin B5 còn tạo được lớp hàng rào bảo vệ cho làn da, giúp da loại bỏ hoàn toàn vẻ ngoài thô ráp, thậm chí bong tróc.</p>
            </div>
            <div class="col-12 col-sm-6 q-pa-md row justify-center">
              <q-img src="~assets/skin.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-center">
        <div class="size-screen padding-bot">
          <p class="text-h5 text-center text-bold">ĐẶC TÍNH</p>
          <p class="text-center q-mt-md">
            Các nghiên cứu khoa học chỉ ra rằng khả năng giữ nước của HA rất cao, có thể giữ được hàm lượng lớn nước gấp 1000 lần trọng lượng của chính mình <br />
            từ đó giúp duy trì độ ẩm vượt xa cả mong đợi.
          </p>
          <div class="row q-mt-md">
            <div class="col-12 col-sm-6 q-pa-md">
              <q-img src="~assets/skin-1.png" />
            </div>
            <div class="col-12 col-sm-6 q-pa-md">
              <p>Xóa bỏ nếp nhăn theo thời gian. Làm tăng độ đàn hồi cho da. Giữ làn da luôn tươi trẻ, mịn màng. Nuôi dưỡng làn da khỏe mạnh. Thúc đẩy sự tăng tưởng tế bào da, giảm sự lão hóa. Hỗ trợ đều màu, làm sáng da.</p>
              <div class="row q-mt-md">
                <div class="col-2">
                  <div class="border-img q-mt-sm">
                    <q-img src="~assets/beaker.png"/>
                  </div>
                </div>
                <div class="col-10 q-px-sm">
                  <p class="text-h6 text-bold">KHÔNG BỊ OXY HOÁ</p>
                  <p class="q-mt-xs">Không bị oxy hoá khi gặp không khí và ánh sáng, khắc phục nhược điểm của vitamin C dạng serum thông thường.</p>
                </div>
              </div>
              <div class="row q-mt-md">
                <div class="col-2">
                  <div class="border-img q-mt-sm">
                    <q-img src="~assets/shield.png"/>
                  </div>
                </div>
                <div class="col-10 q-px-sm">
                  <p class="text-h6 text-bold">KHÔNG GÂY KÍCH ỨNG</p>
                  <p class="q-mt-xs">Không gây kích ứng kể cả với làn da nhạy cảm nhất hay da mụn nhờ cơ chế trao đổi i-on.</p>
                </div>
              </div>
              <div class="row q-mt-md">
                <div class="col-2">
                  <div class="border-img q-mt-sm">
                    <q-img src="~assets/sun.png"/>
                  </div>
                </div>
                <div class="col-10 q-px-sm">
                  <p class="text-h6 text-bold">KHÔNG GÂY BẮT NẮNG</p>
                  <p class="q-mt-xs">Không gây bắt nắng do vitamin C nguyên chất trên da đã được ổn định và bền vững hóa trong lớp khoáng kép.</p>
                </div>
              </div>
              <div class="row col-12 q-mt-md justify-end">
                <q-btn @click="dialog = true" label="Mua ngay" icon="shopping_cart" rounded outline color="amber-9" class="col-10 btn"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-center bg-section">
        <div class="size-screen padding-bot">
          <p class="text-h5 text-center text-bold">THÀNH PHẦN</p>
          <p class="text-center q-mt-md">
            Bao gồm các thành phần tự nhiên không gây kích ứng cho da. <br />
            giúp da phục hồi nhanh chóng mịn màng.
          </p>
          <div class="row q-mt-md items-center">
            <div class="col-12 col-sm-6 col-md-4 q-pa-md">
              <div class="row q-pa-md style-box">
                <div class="col-4 q-pa-md">
                  <q-img src="https://demo.comdy.vn/landing-page-ban-my-pham-bot-lam-sang-da-vitabrid-c12-6/img/thanh-phan/1.png"/>
                </div>
                <div class="col-8">
                  <p class="text-h6 text-bold text-uppercase">Dehydroacetic</p>
                  <p class="q-mt-xs">Ngăn chăn sự phát triển & tiêu diệt nấm, vi khuẩn, vi sinh vật để giúp bảo quản sản phẩm lâu hơn.</p>
                </div>
              </div>
              <div class="row q-pa-md style-box">
                <div class="col-4 q-pa-md">
                  <q-img src="https://demo.comdy.vn/landing-page-ban-my-pham-bot-lam-sang-da-vitabrid-c12-6/img/thanh-phan/3.png"/>
                </div>
                <div class="col-8">
                  <p class="text-h6 text-bold text-uppercase">Hyaluronic Acid</p>
                  <p class="q-mt-xs">Xóa bỏ nếp nhăn, tăng độ đàn hồi. Giữ làn da luôn tươi trẻ, mịn màng
                    Nuôi dưỡng làn da khỏe mạnh.</p>
                </div>
              </div>
              <div class="row q-pa-md style-box">
                <div class="col-4 q-pa-md">
                  <q-img src="https://demo.comdy.vn/landing-page-ban-my-pham-bot-lam-sang-da-vitabrid-c12-6/img/thanh-phan/5.png"/>
                </div>
                <div class="col-8">
                  <p class="text-h6 text-bold text-uppercase">Panthenol</p>
                  <p class="q-mt-xs">Công dụng như một loại kem dưỡng ẩm, làm mềm dịu, chống kích ứng và mất nước cho da.</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 q-pa-md">
              <q-img src="~assets/skin-2.png" />
            </div>
            <div class="col-12 col-sm-6 col-md-4 q-pa-md">
              <div class="row q-pa-md style-box">
                <div class="col-4 q-pa-md">
                  <q-img src="https://demo.comdy.vn/landing-page-ban-my-pham-bot-lam-sang-da-vitabrid-c12-6/img/thanh-phan/2.png"/>
                </div>
                <div class="col-8">
                  <p class="text-h6 text-bold text-uppercase">Vitamin B5</p>
                  <p class="q-mt-xs">Hiệu quả cao trong việc điều trị mụn giúp giữ ẩm cho da, không gây tổn thương da.</p>
                </div>
              </div>
              <div class="row q-pa-md style-box">
                <div class="col-4 q-pa-md">
                  <q-img src="https://demo.comdy.vn/landing-page-ban-my-pham-bot-lam-sang-da-vitabrid-c12-6/img/thanh-phan/4.png"/>
                </div>
                <div class="col-8">
                  <p class="text-h6 text-bold text-uppercase">Niacinamide</p>
                  <p class="q-mt-xs">Là một chất dinh dưỡng thiết yếu giúp kích thích sự hoạt động, phát triển và bổ sung của các tế bào da.</p>
                </div>
              </div>
              <div class="row q-pa-md style-box">
                <div class="col-4 q-pa-md">
                  <q-img src="https://demo.comdy.vn/landing-page-ban-my-pham-bot-lam-sang-da-vitabrid-c12-6/img/thanh-phan/6.png"/>
                </div>
                <div class="col-8">
                  <p class="text-h6 text-bold text-uppercase">Benzyl alcohol</p>
                  <p class="q-mt-xs">Dóng vai trò như một chất bảo quản trong các sản phẩm chăm sóc da và tiêu diệt vi khuẩn – đặc biệt là ký sinh trùng.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-center">
        <div class="size-screen padding-bot">
          <p class="text-h5 text-center text-bold">CÔNG DỤNG</p>
          <p class="text-center q-mt-md">
            Giúp làm trắng sáng da, hết thâm nám, trị mụn hiệu quả với các thành phần tự nhiên <br />
            đảm bảo an toàn cho sức khỏe và làn da.
          </p>
          <div class="row q-mt-md">
            <div class="col-12 col-sm-6 col-md-4 q-pa-md row">
              <div class="col-3">
                <div class="border-img q-mt-sm">
                  <q-img src="~assets/woman-head.png"/>
                </div>
              </div>
              <div class="col-9">
                <p class="text-subtitle1 text-bold">DƯỠNG DA TRẮNG SÁNG</p>
                <p class="q-mt-xs">Trong cách thành phần có chứa Vitamin B3 (Niacinamide) là thành phần làm sáng da hiệu quả.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 q-pa-md row">
              <div class="col-3">
                <div class="border-img q-mt-sm">
                  <q-img src="~assets/spa-care.png"/>
                </div>
              </div>
              <div class="col-9">
                <p class="text-subtitle1 text-bold">XÓA MỜ THÂM NÁM</p>
                <p class="q-mt-xs">Có chứa Vitamin B5, Vitamin B3 ... làm cho xóa mờ thâm nám làm cho làn da mịn màng hơn.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 q-pa-md row">
              <div class="col-3">
                <div class="border-img q-mt-sm">
                  <q-img src="~assets/spa-flower.png"/>
                </div>
              </div>
              <div class="col-9">
                <p class="text-subtitle1 text-bold">ĐẨY LÙI LÃO HÓA</p>
                <p class="q-mt-xs">Panthenol và Dehydroacetic Acid là thành phần chính giúp dướng ẩm da và đẩy luiif láo hóa hiệu quả.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 q-pa-md row">
              <div class="col-3">
                <div class="border-img q-mt-sm">
                  <q-img src="~assets/spa.png"/>
                </div>
              </div>
              <div class="col-9">
                <p class="text-subtitle1 text-bold">TĂNG CƯỜNG ĐỘ ĐÀN HỒI</p>
                <p class="q-mt-xs">Hyaluronic Acid, Vitamin B3 (Niacinamide).. làm tăng độ dàn hồi hiệu quả</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 q-pa-md row">
              <div class="col-3">
                <div class="border-img q-mt-sm">
                  <q-img src="~assets/spa-flower-2.png"/>
                </div>
              </div>
              <div class="col-9">
                <p class="text-subtitle1 text-bold">NGỪA MỤN, KHÁNG VIÊM</p>
                <p class="q-mt-xs">Benzyl alcohol là thành phần chính giúp ngăn ngừa mụn hiệu quá kháng viêng và không gây kích ứng.</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 q-pa-md row">
              <div class="col-3">
                <div class="border-img q-mt-sm">
                  <q-img src="~assets/spa-candle.png"/>
                </div>
              </div>
              <div class="col-9">
                <p class="text-subtitle1 text-bold">BỔ SUNG DƯỠNG CHẤT</p>
                <p class="q-mt-xs">Vitamin B5, Vitamin B3 (Niacinamide)... giúp tăng cường phục hồi da bị tổn thương phục hồi nhanh.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-center bg-section">
        <div class="size-screen padding-bot">
          <p class="text-h5 text-center text-bold">HƯỚNG DẪN SỬ DỤNG</p>
          <p class="text-center q-mt-md">
            Sử dụng 2 lần / ngày sẽ giúp làn da của bạn trắng sáng và an toàn, công dụng trị sạch mụn <br />
            mờ thâm nám, trắng da, không gây kích ứng.
          </p>
          <div class="row q-mt-lg">
            <div class="col-6 col-sm-3 q-pa-md">
              <q-img :ratio="1" src="https://demo.comdy.vn/landing-page-ban-my-pham-bot-lam-sang-da-vitabrid-c12-6/img/steps/1.png"/>
              <p class="text-h6 text-center text-bold q-mt-sm">BƯỚC 1</p>
              <p class="q-mt-xs">Rửa mặt sạch bằng sửa rửa mặt phù hợp để giúp da dễ dàng hấp thụ các dưỡng chất hơn.</p>
            </div>
            <div class="col-6 col-sm-3 q-pa-md">
              <q-img :ratio="1" src="https://demo.comdy.vn/landing-page-ban-my-pham-bot-lam-sang-da-vitabrid-c12-6/img/steps/2.png"/>
              <p class="text-h6 text-center text-bold q-mt-sm">BƯỚC 2</p>
              <p class="q-mt-xs">Hãy để một vài giọt serum lên tay và chấm đều các giọt serum đều lên các vùng trên mặt.</p>
            </div>
            <div class="col-6 col-sm-3 q-pa-md">
              <q-img :ratio="1" src="https://demo.comdy.vn/landing-page-ban-my-pham-bot-lam-sang-da-vitabrid-c12-6/img/steps/3.png"/>
              <p class="text-h6 text-center text-bold q-mt-sm">BƯỚC 3</p>
              <p class="q-mt-xs">Bắt đầu thoa từ giữa khuôn mặt sang hai bên, hai bàn tay di chuyển thành những vệt dài hướng lên. Thoa serum kết hợp với massage nhẹ nhàng để giúp các dưỡng chất sâu hơn vào da. Có thể dùng kết hợp serum với các sản phẩm dưỡng da khác.</p>
            </div>
            <div class="col-6 col-sm-3 q-pa-md">
              <q-img :ratio="1" src="https://demo.comdy.vn/landing-page-ban-my-pham-bot-lam-sang-da-vitabrid-c12-6/img/steps/4.png"/>
              <p class="text-h6 text-center text-bold q-mt-sm">BƯỚC 4</p>
              <p class="q-mt-xs">Massge từ 3 - 5 phút cho đến khi nhân mụn bị hút lên. Sau đó rửa mặt lại bằng nước và lau khô.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-center bg-section-dangky">
        <div class="size-screen padding-bot">
          <p class="text-h5 text-center text-bold">ĐĂNG KÝ ĐỂ ĐƯỢC TƯ VẤN</p>
          <p class="text-center q-mt-md">
            Nhập số điện thoại của bạn để được nhân viên tư vấn liên hệ và tư vấn cho bạn<br />
            để có thể hiểu hơn về chi tiết sản phẩm.
          </p>
          <div class="row justify-center">
            <q-input v-model="sdt" dark  standout autofocus rounded class="col-11 col-sm-9 q-mt-lg" input-class="q-px-md input-signup" placeholder="Nhập số điện thoại của bạn">
              <template v-slot:append>
                <q-btn icon="send" rounded class="btn-send" @click="dangKy"/>
              </template>
            </q-input>
          </div>
        </div>
      </div>
      <div>
        <q-dialog v-model="dialog" square>
          <q-card class="dialog-thanhtoan q-pa-md">
            <div class="row justify-between items-center">
              <p class="text-h5">Thông tin thanh toán</p>
              <q-btn icon="close" flat round v-close-popup/>
            </div>
            <q-scroll-area
              :thumb-style="thumbStyle"
              :bar-style="barStyle"
              :style="{ height: $util.getHeightWindow() - 150 + 'px' }"
            >
              <div>
                <div class="row q-pa-xs">
                  <q-radio v-model="info.gender" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Anh" label="Anh" />
                  <q-radio class="q-ml-sm" v-model="info.gender" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Chị" label="Chị" />
                </div>
                <div class="row q-pa-xs">
                  <q-input class="col-12" v-model="info.name" square filled dense label="Họ và tên" stack-label
                           :rules="[ val => val !== '' || 'Vui lòng nhập họ tên']"
                  />
                </div>

                <div class="row q-pa-xs">
                  <q-input class="col-12" v-model="info.phone" square filled dense label="Số điện thoại" stack-label
                           :rules="[ val => val !== '' || 'Vui lòng nhập số điện thoại']"
                  />
                </div>

                <div class="row q-mt-xs">
                  <q-select class="q-pa-xs col-6" v-model="info.city" :options="location"
                            option-label="name"
                            dense square outlined label="Chọn Tỉnh Thành"/>
                  <q-select class="q-pa-xs col-6" v-model="info.district" :options="info.city && info.city.districts" :disable="info.city"
                            option-label="name"
                            dense square outlined label="Chọn Quận / Huyện"/>
                </div>

                <q-select class="q-pa-xs" v-model="info.ward" :options="info.district && info.district.wards" :disable="info.district"
                          option-label="name"
                          dense square outlined label="Chọn Phường / Xã"/>

                <div class="row q-pa-xs">
                  <q-input class="col-12" v-model="info.address" square filled dense label="Nhập số nhà, tên đường" stack-label
                           :rules="[ val => val !== '' || 'Vui lòng nhập địa chỉ cụ thể số nhà, tên đường ...']"
                  />
                </div>
                <q-input class="q-pa-xs" v-model="info.note" square filled dense label="Yêu cầu khác (Không bắt buộc)" stack-label/>
                <div class="row q-my-md q-pa-xs">
                  <div class="col-3 col-sm-2 bg row justify-center q-pa-sm">
                    <q-img src="~assets/skin-2.png" width="50px" />
                  </div>
                  <div class="col-9 col-sm-10 q-pl-md q-mt-sm">
                    <q-item-label lines="2">
                      <strong>Tc skin beauty</strong><br />
                      Natura Serum trị mụn - mờ thâm nám - trắng da
                    </q-item-label>
                    <div class="row q-mt-md items-center">
                      <q-input class="hide-icon-type-number col-7" input-class="text-center" v-model.number="info.sanpham.amount" type="number" dense outlined square>
                        <template v-slot:prepend>
                          <q-btn flat round size="sm" icon="remove" :disable="info.sanpham.amount <= 1" @click="info.sanpham.amount--"/>
                        </template>
                        <template v-slot:append>
                          <q-btn flat round size="sm" icon="add" @click="info.sanpham.amount++"/>
                        </template>
                      </q-input>
                      <div class="col-5 text-right">
                        <p class="text-strike q-ma-none text-subtitle2">{{$util.formatNumber(279000)}}</p>
                        <p class="text-red-6 q-ma-none text-subtitle1 text-bold">{{$util.formatNumber(price)}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <q-separator></q-separator>
                <div class="row q-px-xs justify-between q-mt-md text-bold">
                  <p>Tổng tiền hàng</p>
                  <p>{{$formatNumber(subtotal)}}</p>
                </div>
                <div class="row q-px-xs justify-between text-bold">
                  <p>Shipping</p>
                  <p>{{totalShipping === 0 ? 'Free' :$formatNumber(totalShipping)}}</p>
                </div>
                <q-separator></q-separator>
                <div class="row q-px-xs justify-between text-bold">
                  <p>Tổng cộng</p>
                  <p>{{$formatNumber(subtotal + totalShipping)}}</p>
                </div>
                <div class="row q-mt-md q-pa-xs">
                  <q-btn label="ĐẶT HÀNG" class="col-12 q-py-sm btn-send" unelevated @click="datHang" />
                </div>
              </div>
            </q-scroll-area>
          </q-card>
        </q-dialog>
      </div>
    </div>
</template>
<script>
var location = require("src/util/local.json")
export default {
  name: 'serum',
  data() {
    return {
      price: 149000,
      shipping: 20000,
      location: location,
      info: {
        sanpham: {
          name: 'Tc skin beauty',
          amount: 1
        },
        name: '',
        phone: '',
        gender: 'Anh',
        note: '',
        city: '',
        district: '',
        ward: '',
        address: '',
        status: 'Chưa thanh toán'
      },
      dialog: false,
      sdt: '',
      thumbStyle: {
        right: '0px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '3px',
        opacity: 0.75
      },
      barStyle: {
        right: '-3px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.2
      }
    }
  },
  computed: {
    totalShipping () {
      return this.info.sanpham.amount > 1 ? 0 : this.shipping
    },
    subtotal () {
      return this.price * this.info.sanpham.amount
    }
  },
  methods: {
    datHang () {
      let isError = false
      let FunCheck = (check, mgs) => {
        if (check) {
          if (!isError) { this.$util.ShowNotify(mgs, true) }
          isError = true
        }
      }
      let infoClone = this.$util.cloneVal(this.info)
      let { name, phone, address, city, district, ward, sanpham } = infoClone
      infoClone.subtotal = this.subtotal
      infoClone.shipping = this.totalShipping
      infoClone.total = this.subtotal + this.totalShipping
      infoClone.city = city.name || ''
      infoClone.district = district.name || ''
      infoClone.ward = ward.name || ''
      FunCheck(name === '', 'Vui lòng nhập đầy đủ họ tên')
      FunCheck(phone === '', 'Vui lòng nhập số điện thoại liên hệ')
      FunCheck(city === '', 'Vui lòng chọn Tỉnh / Thành phố')
      FunCheck(district === '', 'Vui lòng chọn Quận / Huyện')
      FunCheck(ward === '', 'Vui lòng chọn Phường / Xã')
      FunCheck(address === '', 'Vui lòng nhập số nhà , tên đường ...')
      FunCheck(sanpham.amount <= 0, 'Số lượng sản phẩm chưa chính xác')
      if (!isError) {
        this.$push('hoadons/', infoClone)
          .then(() => {
            this.$util.ShowNotify('Đặt hàng thành công')
          })
          .catch(e => {
            this.$util.ShowNotify(e.message, true)
          });
      }
    },
    dangKy () {
      if (this.sdt && this.sdt !== '') {
        this.$push('dangkys/', this.sdt)
          .then(() => {
            this.$util.ShowNotify('Bạn đã đăng ký tư vấn thành công')
          })
          .catch(e => {
            this.$util.ShowNotify(e.message, true)
          });
      }
    }
  }
}
</script>

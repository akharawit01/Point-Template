<template>
  <div>
    <b-modal ref="modalBorrowDetail" size="lg" hide-footer="true" hide-header="true">
      <h1 class="title title-border pb-4 mt-3 mb-5">Boroow points details Experience Club</h1>
      <b-row class="detail-topup">
        <b-col cols="4" offset="1" class="text-center">
          <img src="@/assets/images/img-topup.jpg" alt="" />
        </b-col>
        <b-col cols="6" class="point-topup text-center">
          <h2 class="point">Borrow points 10,000 points</h2>
          <p>Borrow points 10,000 points <br /> = <br /> Experience Club 10,000 points</p>
        </b-col>
      </b-row>
      <h3>Terms & Conditio</h3>
      <ul class="font-sm">
        <li>Experience Club Co., Ltd. is a company who responsible for managing, coordi- nating guest’s reservation and providing service requests only.</li>
        <li>Local rules and regulations must be obeyed in accordance to Service Provider or Owner of the Area.</li>
        <li>Service Provider or Owner of the Area reserved all rights to keep terms and condition updated and must notify all changes to Experience Club within 30 days prior to launching date (or in the case of urgent modifications, must be inform not less than 7 business working days.)</li>
        <li>In the event of insecurities or disasters, Service Provider or Owner of the area is to be solely responsible.</li>
      </ul>
      <table class="table table-bordered table-mdf mt-3">
        <thead>
          <tr>
            <th>Vacation Points Transfer</th>
            <th>Fee per session</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Up to 30,000 points</td>
            <td>1,500 points</td>
          </tr>
          <tr>
            <td>30,001 - 50,000 points</td>
            <td>2,500 points</td>
          </tr>
          <tr>
            <td>50,001 - 100,000 points</td>
            <td>5,000 points</td>
          </tr>
        </tbody>
      </table>
      <b-row align-h="center">
        <b-col cols="3">
          <b-button class="btn-mdf w-100" @click="hideModalDetail">Back</b-button>
        </b-col>
        <b-col cols="3">
          <b-button class="btn-mdf w-100" @click="hideModalDetail">Agree</b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal ref="modalBorrow" size="lg" hide-footer="true" hide-header="true">
      <!-- Step 0 -->
      <div class="text-center" v-if="modalSetp === 0">
        <h1 class="title pt-4 pb-3">Your borrow points detail</h1>
        <p>It may take a few moments for this borrow points.</p>
        <dl class="row my-5">
          <dt class="col-sm-6 text-right">Borrow points</dt>
          <dd class="col-sm-6 text-left">:1,500 point</dd>
          <dt class="col-sm-6 text-right">Fee per session</dt>
          <dd class="col-sm-6 text-left">:1,500 point</dd>
        </dl>
        <ListPoint :items="items" />
        <b-row align-h="center">
          <b-col>
            <b-button class="btn-mdf btn-mdf-lg w-100" @click="hideModalBorrow">Back</b-button>
          </b-col>
          <b-col>
            <b-button class="btn-mdf btn-mdf-lg w-100" @click="handleNext">Confirm</b-button>
          </b-col>
        </b-row>
      </div>
      <!-- Step 1 -->
      <div class="text-center" v-if="modalSetp === 1">
        <h1 class="title pt-4 pb-3">Thank you!! for your service</h1>
        <p>Your balance points 100,100 points.</p>
        <b-row align-h="center" class="mt-5">
          <b-col cols="5">
            <b-button class="btn-mdf w-100" @click="hideModalBorrow">Cancle</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
import ListPoint from '@/components/molecules/ListPoint'
export default {
  name: 'ModalMemberTransfer',
  components: {
    ListPoint
  },
  data () {
    return {
      items: [
        { point: '2,000', label: 'Point Now' },
        { point: '2,300', label: 'Tranfer point + fee' },
        { point: '4,000', label: 'Balance' }
      ],
      modalSetp: 0
    }
  },
  methods: {
    handleNext() {
      this.modalSetp+=1
    },
    handlePre() {
      this.modalSetp-=1
    },
    showModalDetail () {
      this.$refs.modalBorrowDetail.show()
    },
    hideModalDetail () {
      this.modalSetp = 0
      this.$refs.modalBorrowDetail.hide()
    },
    showModalBorrow () {
      this.$refs.modalBorrow.show()
    },
    hideModalBorrow () {
      this.modalSetp = 0
      this.$refs.modalBorrow.hide()
    }
  }
}
</script>

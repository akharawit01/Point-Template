<template>
  <div>
    <b-modal ref="modalTopupDetail" size="lg" hide-footer="true" hide-header="true">
      <h1 class="title title-border pb-4 mt-3 mb-5">Top up details Experience Club</h1>
      <b-row class="detail-topup">
        <b-col cols="4" offset="1" class="text-center">
          <img src="@/assets/images/img-topup.jpg" alt="">
        </b-col>
        <b-col cols="6" class="point-topup text-center">
          <h2 class="point">Top up 100 baht</h2>
          <p>Top up 100 baht <br /> = <br /> Experience Club 100 points</p>
        </b-col>
      </b-row>
      <h3>Terms & Conditio</h3>
      <ul class="font-sm">
        <li>Experience Club Co., Ltd. is a company who responsible for managing, coordi- nating guest’s reservation and providing service requests only.</li>
        <li>Local rules and regulations must be obeyed in accordance to Service Provider or Owner of the Area.</li>
        <li>Service Provider or Owner of the Area reserved all rights to keep terms and condition updated and must notify all changes to Experience Club within 30 days prior to launching date (or in the case of urgent modifications, must be inform not less than 7 business working days.)</li>
        <li>In the event of insecurities or disasters, Service Provider or Owner of the area is to be solely responsible.</li>
      </ul>
      <b-row align-h="center">
        <b-col cols="3">
          <b-button class="btn-mdf w-100" @click="hideModalDetail">Back</b-button>
        </b-col>
        <b-col cols="3">
          <b-button class="btn-mdf w-100" @click="hideModalDetail">Agree</b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal ref="modalTopup" size="lg" hide-footer="true" hide-header="true">
      <div v-if="modalSetp === 0">
        <h1 class="title title-border pb-4 mt-3 mx-0 mb-5 text-left">Top up</h1>
        <b-form>
          <b-row class="mb-2">
            <b-col cols="4">Credit (THB)</b-col>
            <b-col cols="6">
              <b-form-input type="text" />
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4">Get points</b-col>
            <b-col cols="6">1,500 points</b-col>
          </b-row>
        </b-form>
        <h5 class="mt-5">Choose a way to pay</h5>
        <b-tabs class="tab-topup">
          <b-tab active>
            <template slot="title">
              <div class="img-border">
                <img src="@/assets/images/icon-bookbank.png" alt="icon bookbank">
              </div>
              <p>Transfer</p>
            </template>
            <BookbankForm />
          </b-tab>
          <b-tab title="Tab 2">
            <template slot="title">
              <div class="img-border">
                <img src="@/assets/images/icon-craditcard.png" alt="icon craditcard">
              </div>
              <p>Credit Card</p>
            </template>
            <CraditcardForm />
          </b-tab>
          <b-tab title="Tab 3">
            <template slot="title">
              <div class="img-border">
                <img src="@/assets/images/icon-promptpay.png" alt="icon promptpay">
              </div>
              <p>PromptPay</p>
            </template>
            <PromptpayForm />
          </b-tab>
        </b-tabs>

        <h5 class="mt-5">Terms & Conditio</h5>
        <ul class="font-sm">
          <li>Experience Club Co., Ltd. is a company who responsible for managing, coordi- nating guest’s reservation and providing service requests only.</li>
          <li>Local rules and regulations must be obeyed in accordance to Service Provider or Owner of the Area.</li>
          <li>Service Provider or Owner of the Area reserved all rights to keep terms and condition updated and must notify all changes to Experience Club within 30 days prior to launching date (or in the case of urgent modifications, must be inform not less than 7 business working days.)</li>
          <li>In the event of insecurities or disasters, Service Provider or Owner of the area is to be solely responsible.</li>
        </ul>
        <b-row align-h="center">
          <b-col cols="3">
            <b-button class="btn-mdf w-100" @click="hideModalTopup">Cancle</b-button>
          </b-col>
          <b-col cols="3">
            <b-button class="btn-mdf w-100" @click="handleNext">Confirm</b-button>
          </b-col>
        </b-row>
      </div>
      <!-- Step 1 -->
      <div class="text-center" v-if="modalSetp === 1">
        <h1 class="title pt-4 pb-3">Your top up details</h1>
        <p>It may take a few moments to update your points. Your points are under the process.</p>
        <dl class="row my-5">
          <dt class="col-sm-6 text-right">Member number</dt>
          <dd class="col-sm-6 text-left">AB1234</dd>
          <dt class="col-sm-6 text-right">Tranfer point</dt>
          <dd class="col-sm-6 text-left">1,500 point</dd>
          <dt class="col-sm-6 text-right">Fee per session</dt>
          <dd class="col-sm-6 text-left">1,500 points</dd>
        </dl>
        <b-row align-h="center">
          <b-col cols="3">
            <b-button class="btn-mdf w-100" @click="handlePre">Edit</b-button>
          </b-col>
          <b-col cols="3">
            <b-button class="btn-mdf w-100" @click="handleNext">Confirm</b-button>
          </b-col>
        </b-row>
      </div>
      <!-- Step 2 -->
      <div class="text-center" v-if="modalSetp === 2">
        <h1 class="title pt-4 pb-3">Thank you!! for your service</h1>
        <p>Your balance points 100,100 points.</p>
        <b-row align-h="center" class="mt-5">
          <b-col cols="5">
            <b-button class="btn-mdf w-100" @click="hideModalTopup">Cancle</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
import BookbankForm from '@/components/forms/BookbankForm'
import CraditcardForm from '@/components/forms/CraditcardForm'
import PromptpayForm from '@/components/forms/PromptpayForm'

export default {
  name: 'ModalMemberTransfer',
  components: {
    BookbankForm,
    CraditcardForm,
    PromptpayForm,
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
      this.$refs.modalTopupDetail.show()
    },
    hideModalDetail () {
      this.modalSetp = 0
      this.$refs.modalTopupDetail.hide()
    },
    showModalTopup () {
      this.$refs.modalTopup.show()
    },
    hideModalTopup () {
      this.modalSetp = 0
      this.$refs.modalTopup.hide()
    }
  }
}
</script>

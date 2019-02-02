<template>
  <div>
    <HeroSlide />
    <b-container class="content-box member-tranfer-detail-page">
      <h1 class="title text-left pb-3 mt-5 mb-4">
        <img src="@/assets/images/icon-tranfer.png" /> Member Transfer Detail
      </h1>
      <b-card class="border-0">
        <b-media class="media-transfer">
          <b-img slot="aside" :src="require('@/assets/images/tranfer.png')" width="250" height="250" alt="placeholder" />
          <h4 class="mt-0 ">Member Tranfer</h4>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
            in faucibus.
          </p>
          <b-button class="mr-2 btn-mdf" href="/#/membertrander/">Back</b-button>
          <b-button class="btn-mdf btn-mdf-transfer" @click="openModal">Transfer point</b-button>
        </b-media>
      </b-card>

      <h5 class="my-4 mt-5">Points Tranfer</h5>
      <ul>
        <li>
          Points transfer will be associated with fee which will be deducted from transferrer’s account.
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
        </li>
        <li>Recipient of points transfer must be a member only.</li>
        <li>Transfer points to Service Partners, regulations will be based from each individual partner’s company.</li>
      </ul>
    </b-container>
    <ModalMemberTransfer ref="modal" />
  </div>
</template>

<script>
import ListPoint from '../components/molecules/ListPoint'
import HeroSlide from '../components/organisms/HeroSlide'
import ModalMemberTransfer from '../components/modals/MemberTransfer'

export default {
  name: 'MemberTranfersDetail',
  components: {
    ListPoint,
    HeroSlide,
    ModalMemberTransfer
  },
  methods: {
    openModal() {
      this.$refs.modal.showModal()
    }
  }
}
</script>

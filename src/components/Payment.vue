<template>
  <div id="payment">
    <form action="/complete" id="paymentForm" method="post">
      <!-- all other fields you want to collect, e.g. name and shipping address -->
      <div id='paymentSection'></div>
      <div>
        <input type="submit" value="Place Order" onclick="Worldpay.submitTemplateForm()" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  'name': 'Payment'
}
</script>

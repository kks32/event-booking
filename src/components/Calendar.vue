<template>
  <div class="card">
    <div class="row">
      <span>Booking date：</span>
      <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
    </div>
  </div>
</template>

<script>
import Calendar from './vue-datepicker-es6'

export default {
  data () {
    return {
      startTime: {
        time: ''
      },
      endtime: {
        time: ''
      },
      option: {
        type: 'day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD',
        placeholder: 'when?',
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '2px solid #fff',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          'color': '#5F5F5F'
        },
        color: {
          header: '#0000FF',
          headerText: '#FFFFFF'
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: false // as true as default
      },
      timeoption: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD HH:mm'
      },
      limit: [{
        type: 'weekday',
        available: [1, 2, 3, 4, 5, 6]
      },
      {
        type: 'fromto',
        from: '2017-03-21',
        to: '2017-04-20'
      }]
    }
  },
  components: {
    'date-picker': Calendar
  }
}
</script>


<template>
  <div class="contact">
    <section id="inner-headline">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="pageTitle">Contact Us</h2>
          </div>
        </div>
      </div>
    </section>
    <section id="content">

      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div id="allmap" style="height: 300px"></div>
            <!--<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=Opd4aDLgTK9CZCAvxysSdiAv"></script>
            <div id="allmap" style="height: 300px"></div>

            <script type="text/javascript">
              // 百度地图API功能
              var map = new BMap.Map("allmap");
              var point = new BMap.Point(116.331398,39.897445);
              map.centerAndZoom(point,12);

              var geolocation = new BMap.Geolocation();
              geolocation.getCurrentPosition(function(r){
                if(this.getStatus() == BMAP_STATUS_SUCCESS){
                  var mk = new BMap.Marker(r.point);
                  map.addOverlay(mk);
                  map.panTo(r.point);
                  console.log('您的位置：'+r.point.lng+','+r.point.lat);
                }
                else {
                  console.log('failed'+this.getStatus());
                }
              },{enableHighAccuracy: true});

              map.enableScrollWheelZoom(true);
            </script>-->

          </div>
        </div>


        <div class="row">
          <div class="col-md-6">
            <br>
            <div class="alert alert-success hidden" id="contactSuccess">
              <strong>Success!</strong> Your message has been sent to us.
            </div>
            <div class="alert alert-error hidden" id="contactError">
              <strong>Error!</strong> There was an error sending your message.
            </div>
            <div class="contact-form">
              <form id="contact-form" role="form" novalidate="novalidate">
                <div class="form-group has-feedback">
                  <label for="name">Name*</label>
                  <input type="text" class="form-control" id="name" name="name" placeholder="">
                  <i class="fa fa-user form-control-feedback"></i>
                </div>
                <div class="form-group has-feedback">
                  <label for="email">Email*</label>
                  <input type="email" class="form-control" id="email" name="email" placeholder="">
                  <i class="fa fa-envelope form-control-feedback"></i>
                </div>
                <div class="form-group has-feedback">
                  <label for="subject">Subject*</label>
                  <input type="text" class="form-control" id="subject" name="subject" placeholder="">
                  <i class="fa fa-navicon form-control-feedback"></i>
                </div>
                <div class="form-group has-feedback">
                  <label for="message">Message*</label>
                  <textarea class="form-control" rows="6" id="message" name="message"
                            placeholder=""></textarea>
                  <i class="fa fa-pencil form-control-feedback"></i>
                </div>
                <input type="submit" value="Submit" class="btn btn-default">
              </form>
            </div>
          </div>
          <div class="col-md-6">

            <div class="span4">
              <div class="title-box clearfix "><h3 class="title-box_primary">Contact info</h3></div>
              <h5>Lorem ipsum dolor sit amet, cadipisicing sit amet, consectetur adipisicing elit. Atque sed,
                quidem quis praesentium.</h5>
              <p>Lorem ipsum dolor sit amet, cadipisicing sit amet, consectetur adipisicing elit. Lorem ipsum
                dolor sit amet, cadipisicing sit amet, consectetur adipisicing elit. Atque sed, quidem quis
                praesentium Atque sed, quidem quis praesentium, ut unde fuga error commodi architecto,
                laudantium culpa tenetur at id, beatae pet.<br>
              </p>
              <address>
                <strong>The Company Name.<br>
                  12345 St John Point,<br>
                  Brisbean, ABC 12 St 11.</strong><br>
                Telephone: +1 234 567 890<br>
                FAX: +1 234 567 890<br>
                E-mail: <a href="mailto:info@sitename.org">mail@sitename.org</a><br>
              </address>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
    export default {
        name: "contact",
      data (){
          return {

          }
      },
      mounted() {
          // 百度地图API功能
          var map = new BMap.Map("allmap");
          var point = new BMap.Point(116.331398,39.897445);
          map.centerAndZoom(point,12);

          var geolocation = new BMap.Geolocation();
          geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
              var mk = new BMap.Marker(r.point);
              map.addOverlay(mk);
              map.panTo(r.point);
              console.log('您的位置：'+r.point.lng+','+r.point.lat);
            }
            else {
              console.log('failed'+this.getStatus());
            }
          },{enableHighAccuracy: true});

          map.enableScrollWheelZoom(true);
      }
    }
</script>

<style scoped>

</style>

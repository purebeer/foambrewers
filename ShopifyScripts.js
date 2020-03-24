{% for line in checkout.line_items %}
  <!-- DEBUG looking at {{ line.title }} -->
  {% if line.title contains 'Cans' %}
    <p></br><span style="font-size:28px;font-weight:bold">YOU BOUGHT CANS AND/OR GROWLERS!</span></br></br><b>CHECK THE FOLLOWING LIST TO ENSURE THAT WE CAN PROCESS YOUR ORDER CORRECTLY!</b> You can find all the details/requirements for ordering at the top of our <a href="https://shop.foambrewers.com/collections/delivery-and-curbside-pick-up" target="_blank">Delivery and Curbside Pick-Up</a> page. If anything doesn't check out, please email us at <a href="mailto:info@foambrewers.com" target="_blank">info@foambrewers.com</a> with your concern.</br></br>1. You are located in one of the listed Delivery Zones and are aware of your delivery date.</br>2. You provided an appropriate phone number and email address so that we can contact you during delivery.</br>3. You only purchased items/beer from our Delivery & Curbside Pick-Up page? If your cart contained merchandise as well as beer, shipping/delivery is miscalculated and we will need to refund you and start over.</br>4. You are at least 21 years of age and will provide valid ID upon delivery</br>5. Did you select the appropriate delivery method? Whether you are picking up at one of our two brewery locations, or we are delivering to your house.</br></br><b>If all of the above check out, we will be in contact soon regarding your delivery! Please make sure you are home during the specified delivery time and have your phone on you. When we arrive, we will call you. If you do not pick up your phone and/or come to the door within 5 minutes, we will move on to our next delivery.</b></p>
    {% break %}
  {% endif %}
{% endfor %}

<script>
  // DEBUG {{ checkout.shipping_method.title }} has been used
  {% if checkout.shipping_method.title == 'Free Delivery - Burlington & Winooski ($30 minimum)' %}
    Shopify.Checkout.OrderStatus.addContentBox(
      `<p>Okay, we're ready for you to collect your beer from our brewery at 112 Lake Street, Burlington, Vermont. We are open 11:30am to 7:30pm every day.</br></br>If you just placed your order, and it contains growlers, please allow 20 minutes for us to fill them.</br></br>You must pick up orders within 48 hours of placing them.</p>`
    )
  {% endif %}
</script>


  <script>
    // DEBUG {{ checkout.shipping_method.title }} has been used
    {% if checkout.shipping_method.title == 'Pick-Up (Burlington)' %}
      Shopify.Checkout.OrderStatus.addContentBox(
        `<p>Okay, we're ready for you to collect your beer from our brewery at 112 Lake Street, Burlington, Vermont. We are open 11:30am to 7:30pm every day.</br></br>If you just placed your order, and it contains growlers, please allow 20 minutes for us to fill them.</br></br>You must pick up orders within 48 hours of placing them.</p>`
      )
    {% endif %}
  </script>

  <script>
    // DEBUG {{ checkout.shipping_method.title }} has been used
    {% if checkout.shipping_method.title == 'Pick-Up (Hinesburg-The Annex)' %}
      Shopify.Checkout.OrderStatus.addContentBox(
        `<p>Okay, we're ready for you to collect your beer from our brewery at 10516 Route 116, Hinesburg, Vermont. We are open 2:00pm to 6:00pm on Monday through Saturday.</br></br>Remember that no growlers at The Annex. If you ordered growlers, we will refund them and have your cans ready for pickup.</br></br>You must pick up orders within 48 hours of placing them.</p>`
      )
    {% endif %}
  </script>

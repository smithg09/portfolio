function send_email() {
    
  var e = document.getElementById("email").value,
    t = document.getElementById("subject").value,
    o = document.getElementById("body").value,
    a = document.getElementById("name").value;
    console.log("inside email")
 try {
     Email.send({
     Host: "smtp.gmail.com",
     Username: "smith.gajjar@gmail.com",
     Password: "sg24@4494",
     To: "smith.gajjar@gmail.com",
     From: e,
     Subject: "By " + a + " : " + t,
     Body: o,
   }).then((e) => {
     "OK" === e ? alert("Message Sent") : alert(e);
   });
 } catch (error) {
    alert("Uh oh, There's some problem can you please try after sometime.\n Or you can connect me on Linkedin here -> https://www.linkedin.com/in/smith-gajjar-5a27716b/ ")
 }
}
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip(),
    $('[data-toggle="tooltip"]').tooltip("show"),
    setTimeout(() => {
      $('[data-toggle="tooltip"]').tooltip("hide");
    }, 5e3);
});
const pickr = Pickr.create({
  el: ".color-picker",
  theme: "monolith",
  swatches: [
    "rgb(38, 190, 217)",
    "rgb(62, 100, 255)",
    "rgb(26, 190, 134)",
    "rgb(255, 120, 49)",
  ],
  default: "#15b9d7",
  components: {
    preview: !0,
    opacity: !0,
    hue: !0,
    interaction: { hex: !0, rgba: !0, save: !0 },
  },
});
pickr.on("save", (e) => {
  let t = document.documentElement,
    o = e.toRGBA();
  (total = o[0] + o[1] + o[2]),
    console.log(total),
    total > 660
      ? alert("Uh oh, Please select color other than WHITE👀")
      : t.style.setProperty("--primary", o);
});

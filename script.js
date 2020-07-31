function e(m, k) {
  return CryptoJS.AES.encrypt(m, k).toString();
}
function d(m, k) {
  return CryptoJS.AES.decrypt(m, k).toString(CryptoJS.enc.Utf8);
}
function g(i) {
  return document.getElementById(i);
}
function t(i, v) {
  g(i).value = v;
}
function en() {
  let m = g("enc-msg").value;
  let k = g("enc-key").value;
  
  if(m !== "" && k !== "") {
    g("enc-out").value = e(m, k);
  }
}
function de() {
  let m = g("dec-msg").value;
  let k = g("dec-key").value;
  
  if(m !== "" && k !== "") {
    g("dec-out").value = d(m, k);
  }
}

g("enc-msg").addEventListener("change", function(){en();});
g("enc-key").addEventListener("change", function(){en();});

g("dec-msg").addEventListener("change", function(){de();});
g("dec-key").addEventListener("change", function(){de();});

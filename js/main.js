$(document).ready(()=>{
  inView('.triangle')
    .on('enter', el => {
      $("#cta-button").hide();
    })
    .on('exit', el => {
      $("#cta-button").show();
    });
  inView('.square')
    .on('enter', el => {
      $("#cta-button").hide();
    })
    .on('exit', el => {
      $("#cta-button").show();
    });
  inView('.circle')
    .on('enter', el => {
      $("#cta-button").hide();
    })
    .on('exit', el => {
      $("#cta-button").show();
    });
});

// Swal.fire({
//     title: "Welcome to the Demo! anjayawni ",
//     text: "This is a simple demonstration of SweetAlert2. aidawd aijdjb dwadwj oa jwdao jdwadji wk",
//     icon: "info",
//     confirmButtonText: "Got it!",
//     showDenyButton: true,
//     denyButtonText: "No, thanks",
//     showCancelButton: true,
//     cancelButtonText: "Cancel",
//     footer: '<a href="https://sweetalert2.github.io/">Learn more about SweetAlert2 adaibwd awdawdj awdoa jwdawdaj wdm</a>',
//     showCloseButton: true,
//     input: 'range',
//     // inputPlaceholder: 'Type something here...',
//     inputAttributes: {
//       'aria-label': 'Type your message here',
//       'title': 'Input your message',
//       'required': true,
//       'min': 5,
//       'max': 20,
//       'step': 2,
//     },
// })



const Toast = Swal.mixin({
  toast: true,
  position: 'center-end',
  showConfirmButton: false,
  // showDenyButton: true,
  // showCancelButton: true,
  // timer: 150000,
  // timerProgressBar: true,
  didOpen: (toast) => {
    // toast.addEventListener('mouseenter', Swal.stopTimer);
    // toast.addEventListener('mouseleave', Swal.resumeTimer);
    toast.addEventListener('click', () => Swal.close() );
  },
})

;(async () => { })()

;(async () => {
  await Toast.fire({
    icon: 'success',
    title: 'Success',
    text: 'This is a success message! aiwu wauiwdawiudawiubawudawdauidwb8uai wd8auida8wuidn',
  })
  await Toast.fire({
    icon: 'error',
    title: 'Error',
    text: 'This is a success message!',
  })
  await Toast.fire({
    icon: 'warning',
    title: 'Warning',
    text: 'This is a success message!',
  })
  await Toast.fire({
    icon: 'info',
    title: 'Info',
    text: 'This is a success message!',
  })
  await Toast.fire({
    icon: 'question',
    title: 'Question',
    text: 'This is a success message!',
  })
})()
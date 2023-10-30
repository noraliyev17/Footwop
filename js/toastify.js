document.getElementById('myButton').addEventListener('click', function() {
    Toastify({
      text: 'Request sent',
      duration: 3000,  // Toast duration in milliseconds
      newWindow: true,
      close: true,
      gravity: 'top',  // Position of the toast notification
      position: 'right',  // Position of the toast notification
      backgroundColor: 'linear-gradient(to right, #2eed, #96c93d)',
      stopOnFocus: true  // Stop hiding the toast when focused
    }).showToast();
  });
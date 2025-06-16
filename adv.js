 function validateForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return false;
      }

      if (!emailRegex.test(email)) {
        alert('Invalid email format.');
        return false;
      }

      alert('Form submitted!');
      return true;
    }
    function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();
      if (!taskText) {
        alert('Please enter a task.');
        return;
      }

      const li = document.createElement('li');
      li.textContent = taskText;

      const btn = document.createElement('button');
      btn.textContent = 'Remove';
      btn.className = 'remove-btn';
      btn.onclick = () => li.remove();

      li.appendChild(btn);
      document.getElementById('taskList').appendChild(li);
      taskInput.value = '';
    }
    const images = [
      'https://picsum.photos/id/1015/600/300',
      'https://picsum.photos/id/1016/600/300',
      'https://picsum.photos/id/1018/600/300',
      'https://picsum.photos/id/1025/600/300'
    ];
    let current = 0;

    function showImage(index) {
      const img = document.getElementById('carouselImg');
      img.src = images[index];
    }

    function nextImage() {
      current = (current + 1) % images.length;
      showImage(current);
    }

    function prevImage() {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    }
    function checkAnswer(button, isCorrect) {
      if (isCorrect) {
        button.style.backgroundColor = 'green';
        alert('Correct!');
      } else {
        button.style.backgroundColor = 'red';
        alert('Wrong Answer!');
      }
    }
    async function fetchJoke() {
      const res = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await res.json();
      document.getElementById('jokeBox').innerText = `${data.setup} — ${data.punchline}`;
    }
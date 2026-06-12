function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function showMessage(text, isError) {
  const message = document.getElementById("message");
  message.innerText = text;
  message.style.color = isError ? "red" : "green";
}

function handleSubmit(event) {
  event.preventDefault();

  const email = document.getElementById("toEmail").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const content = document.getElementById("content").value.trim();

  if (!validateEmail(email)) {
    showMessage("邮箱格式不正确！", true);
    return;
  }
  if (!subject) {
    showMessage("请填写邮件主题！", true);
    return;
  }
  if (!content) {
    showMessage("请填写邮件内容！", true);
    return;
  }

  showMessage("邮件已提交：发送至 " + email + "，主题：" + subject, false);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("emailForm").addEventListener("submit", handleSubmit);
});

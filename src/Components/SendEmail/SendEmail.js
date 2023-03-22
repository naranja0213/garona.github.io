import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './SendEmail.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bp78kuh', 'template_ls1mm4r', form.current, 'ZDqI3aE0jjLBNiw4I')
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
          alert("感谢您信任我们，我们将会尽快回复！ ")
          e.target.reset();
      }, 
      (error) => {
          console.log(error.text);
      });
  };

  return (
    < section className='emails' id='email-section'>
    <form  ref={form} onSubmit={sendEmail}>
        <p>如果您需要有关我们办公室或我们服务的更多信息，请立即通过以下表格联系我们、致电我们或到我们的办公室拜访我们。我们很乐意帮助您。</p>
      <label>姓名</label>
      <input type="text" name="user_name" />
      <label>邮箱</label>
      <input type="email" name="user_email" />
      <label>请留下您想要咨询的问题</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </section>
  );
};

export default ContactUs;
import { supabase } from './supabaseClient';

const registerBtn = document.getElementById('registerBtn') as HTMLButtonElement;

registerBtn.addEventListener('click', async () => {
  const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const username = (document.getElementById('username') as HTMLInputElement).value;
  const password = (document.getElementById('password') as HTMLInputElement).value;

  if (!email || !username || !password) {
    alert('Email, Username & Password required!');
    return;
  }

  const { error: signUpError } = await supabase.auth.signUp({ email, password });
  if (signUpError) { alert(signUpError.message); return; }

  const { error: insertError } = await supabase.from('users').insert({ full_name: fullName, phone, email, username });
  if (insertError) { alert(insertError.message); return; }

  alert('Registration successful! Check your email.');
  window.location.href = '/login.html';
});

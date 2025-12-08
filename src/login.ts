import { supabase } from './supabaseClient';

const loginBtn = document.getElementById('loginBtn') as HTMLButtonElement;

loginBtn.addEventListener('click', async () => {
  const username = (document.getElementById('loginUsername') as HTMLInputElement).value;
  const password = (document.getElementById('loginPassword') as HTMLInputElement).value;

  if (!username || !password) { alert('Username & Password required!'); return; }

  const { data, error } = await supabase.from('users').select('email').eq('username', username).single();
  if (error || !data) { alert('Invalid username'); return; }

  const { error: loginError } = await supabase.auth.signInWithPassword({ email: data.email, password });
  if (loginError) { alert(loginError.message); return; }

  sessionStorage.setItem('username', username);
  alert('Welcome, ' + username + '!');
  window.location.href = '/dashboard.html';
});

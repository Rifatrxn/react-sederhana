import { useState } from 'react'
import './App.css'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [error, setError] = useState('')
  const [user, setUser] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Email dan password wajib diisi.')
      return
    }
    if (!email.includes('@')) {
      setError('Format email tidak valid.')
      return
    }
    if (password.length < 6) {
      setError('Password minimal 6 karakter.')
      return
    }

    // Login dummy — ganti dengan API nanti
    if (email === 'admin@example.com' && password === '123456') {
      setUser({ email })
    } else {
      setError('Email atau password salah. Coba admin@example.com / 123456')
    }
  }

  const handleLogout = () => {
    setUser(null)
    setEmail('')
    setPassword('')
  }

  if (user) {
    return (
      <div className="login-page">
        <div className="login-card center">
          <h2>Selamat datang 👋</h2>
          <p>Kamu login sebagai <b>{user.email}</b></p>
          <button className="btn primary full" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    )
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Login</h2>
        <p className="muted">Masuk ke akun WebSaya</p>

        {error && <div className="error">{error}</div>}

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
          />
        </label>

        <label>
          Password
          <div className="pw-wrap">
            <input
              type={showPw ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123456"
            />
            <button type="button" className="link" onClick={() => setShowPw(!showPw)}>
              {showPw ? 'Sembunyi' : 'Lihat'}
            </button>
          </div>
        </label>

        <button type="submit" className="btn primary full">Masuk</button>
        <p className="muted small">Demo: admin@example.com / 123456</p>
      </form>
    </div>
  )
}

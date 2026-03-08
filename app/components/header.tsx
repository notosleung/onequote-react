import { NavLink } from 'react-router'
import { useDarkMode } from '~/hooks/useDarkMode'

export default function Header() {
  const { toggleDark } = useDarkMode()
  return (
    <div className="header">
      <NavLink to="/" className="logo" />
      <nav className="menu">
        <NavLink to="/" className="hover-underline">
          首页
        </NavLink>
        <NavLink to="/about" className="hover-underline">
          关于
        </NavLink>
        <a className="hover-underline cursor-pointer" onClick={event => toggleDark(event)}>
          <span className="hidden dark:inline">开灯</span>
          <span className="inline dark:hidden">熄灯</span>
        </a>
      </nav>
    </div>
  )
}

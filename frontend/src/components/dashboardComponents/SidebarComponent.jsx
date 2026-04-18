import { NavLink } from 'react-router-dom'
import { useTooltip } from '../../context/contextToolTip'
const SidebarComponent = ({ title, open, items }) => {
  const { showTooltip, hideTooltip } = useTooltip()

  return (
    <div className="mb-4">
      {open && ( <p className="px-6 mb-3 text-[10px] tracking-[0.25em] text-black/50 font-semibold"> {title} </p> )}

      <div>
        {items.map((item) => (
          <NavLink key={item.label} to={item.path}
            onMouseEnter={ !open ? (e) => showTooltip( item.label, e.currentTarget.getBoundingClientRect() ) : undefined } onMouseLeave={!open ? hideTooltip : undefined}
            className={({ isActive }) =>
              `group flex items-center gap-3 mx-3 px-3 py-2 rounded-2xl text-sm font-medium transition-all duration-200
              ${ isActive ? 'bg-white/15 text-black shadow-lg backdrop-blur-md' : 'text-black/70 hover:bg-black/10 hover:text-black' } ` } >
            <div className="flex items-center justify-center w-9 h-9 rounded-xl transition group-hover:scale-105">
              <item.icon className="text-lg" />
            </div>

            {open && ( <span className="transition-opacity duration-200"> {item.label} </span> )}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default SidebarComponent

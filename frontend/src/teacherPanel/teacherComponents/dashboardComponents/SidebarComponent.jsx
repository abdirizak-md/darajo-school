import { NavLink } from "react-router-dom";
import { useTooltip } from "../../context/contextToolTip";
import { useEffect } from "react";
const SidebarComponent = ({ title, open, items }) => {
  const { showTooltip, hideTooltip } = useTooltip();

  useEffect(() => {
    if (open) hideTooltip();
  }, [open]);

  return (
    <div className="mb-4">
      {open && (
        <p className="px-6 mb-3 text-[10px] tracking-[0.25em] text-orange-500 font-semibold">
          {" "}
          {title}{" "}
        </p>
      )}

      <div>
        {items.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            onMouseEnter={
              !open
                ? (e) =>
                    !open &&
                    showTooltip(
                      item.label,
                      e.currentTarget.getBoundingClientRect(),
                    )
                : undefined
            }
            onMouseLeave={!open ? hideTooltip : undefined}
            className={({ isActive }) =>
              `group flex items-center gap-3 mx-3 px-3 py-2 rounded-2xl text-sm font-medium transition-all duration-200
              ${isActive ? "bg-orange-500/15 text-orange-500 shadow-lg backdrop-blur-lg" : "text-black/70 hover:bg-orange-500/10 hover:text-orange-500"} `
            }
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-xl transition group-hover:scale-105">
              <item.icon className="text-lg text-orange-500" />
            </div>

            {open && (
              <span className="transition-opacity duration-200">
                {" "}
                {item.label}{" "}
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SidebarComponent;

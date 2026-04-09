import actions from '../../Data/actions'

const QuickActionComponent = () => {
  return (
    <div className="bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.2)] p-4 mb-8">
        <h1 className='text-lg mb-6 text-gray-700 font-bold'>Quick Actions</h1>
        <div className="rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {actions.map((action) => (
            <button key={action.label} className="flex items-center gap-3 p-3 bg-gray-100 hover:bg-[#006b3f] hover:text-white rounded-lg transition">
                <action.icon size={20} />
                <span>{action.label}</span>
            </button>
            ))}
        </div>
    </div>
  )
}

export default QuickActionComponent
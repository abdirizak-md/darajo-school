import React from 'react'
import recentActivities from '../../Data/recentActivities'

const RecentActivityComponent = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
        <h2 className="text-gray-700 font-semibold text-lg mb-4">Recent Activities</h2>
        <div className="divide-y divide-gray-200">
        {recentActivities.map((activity, idx) => (
            <div key={idx} className="flex items-center gap-4 p-3 hover:bg-gray-50 transition">
            <div style={{ backgroundColor: activity.iconColor }} className="w-10 h-10 rounded-full flex items-center justify-center text-white">
                <activity.icon size={18} />
            </div>
            <div className="flex flex-col">
                <span className="font-medium text-gray-800">{activity.activityName}</span>
                <span className="text-gray-500 text-sm">{activity.timeEslap}</span>
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default RecentActivityComponent
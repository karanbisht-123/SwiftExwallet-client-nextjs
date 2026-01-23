export default function Loading() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900 lg:py-12 px-0 lg:px-8">
            <div className="container lg:rounded-3xl p-2 lg:p-8 bg-linear-to-br from-slate-50 to-slate-100 mx-auto">
                <div className="my-4 flex items-center justify-between">
                    <div className="h-6 w-32 bg-slate-200 rounded animate-pulse"></div>
                </div>
                <div className="p-2 md:p-4 lg:p-6 bg-linear-to-br from-slate-50 to-slate-100">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                            <div className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-slate-200 rounded-full animate-pulse flex-shrink-0"></div>

                            <div className="flex-1 min-w-0">
                                <div className="h-8 md:h-10 lg:h-12 bg-slate-200 rounded w-48 mb-2 animate-pulse"></div>
                                <div className="h-6 bg-slate-200 rounded w-24 animate-pulse"></div>
                            </div>
                        </div>

                        <div className="text-right flex-shrink-0">
                            <div className="h-8 md:h-10 lg:h-12 bg-slate-200 rounded w-32 mb-2 animate-pulse"></div>
                            <div className="h-6 bg-slate-200 rounded w-20 ml-auto animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* Chart skeleton */}
                <div className="mb-8 h-[500px] bg-linear-to-br from-slate-50 to-slate-100 p-2 md:p-6">
                    <div className="w-full h-full bg-slate-200 rounded-lg animate-pulse flex items-center justify-center">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-slate-400 font-medium">Loading chart data...</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="p-4 bg-white rounded-lg shadow-sm">
                            <div className="h-4 bg-slate-200 rounded w-24 mb-3 animate-pulse"></div>
                            <div className="h-6 bg-slate-200 rounded w-32 animate-pulse"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
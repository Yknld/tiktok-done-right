const DashboardPreview = () => {
  return (
    <section className="section-container section-spacing border-t border-border">
      <div className="mb-8">
        <p className="text-subtle text-sm mb-2">Preview of the system we're testing</p>
        <h2 className="heading-section text-foreground">
          Dashboard preview
        </h2>
      </div>

      <div className="card-surface p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
          <div>
            <p className="text-subtle text-xs uppercase tracking-wider mb-1">Account</p>
            <p className="font-medium text-foreground">@yourproduct_official</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-status-warming"></div>
            <span className="text-sm font-medium text-foreground">Warming</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <p className="text-subtle text-xs uppercase tracking-wider mb-1">Platform</p>
            <p className="text-lg font-medium text-foreground">TikTok</p>
          </div>
          <div>
            <p className="text-subtle text-xs uppercase tracking-wider mb-1">This week</p>
            <p className="text-lg font-medium text-foreground">7 posts</p>
          </div>
          <div>
            <p className="text-subtle text-xs uppercase tracking-wider mb-1">Frequency</p>
            <p className="text-lg font-medium text-foreground">1/day</p>
          </div>
          <div>
            <p className="text-subtle text-xs uppercase tracking-wider mb-1">Account health</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-status-active rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-foreground">Good</span>
            </div>
          </div>
        </div>

        {/* Schedule Preview */}
        <div>
          <p className="text-subtle text-xs uppercase tracking-wider mb-3">Upcoming posts</p>
          <div className="space-y-2">
            {[
              { day: "Monday", time: "2:00 PM", status: "Scheduled" },
              { day: "Tuesday", time: "6:30 PM", status: "Scheduled" },
              { day: "Wednesday", time: "11:00 AM", status: "Pending" },
            ].map((post, i) => (
              <div key={i} className="flex items-center justify-between py-3 px-4 bg-surface-subtle rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-foreground w-24">{post.day}</span>
                  <span className="text-subtle text-sm">{post.time}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${
                  post.status === "Scheduled" 
                    ? "bg-accent text-accent-foreground" 
                    : "bg-secondary text-muted-foreground"
                }`}>
                  {post.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;

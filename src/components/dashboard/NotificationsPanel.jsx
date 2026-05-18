import EmptyState from "../common/EmptyState";

export default function NotificationsPanel({ notifications = [] }) {
  if (!notifications.length) {
    return (
      <EmptyState
        title="No notifications"
        description="You're all caught up for now."
      />
    );
  }

  return (
    <div>
      {notifications.map((item) => (
        <div key={item.id}>{item.message}</div>
      ))}
    </div>
  );
}
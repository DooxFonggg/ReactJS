function getNotifications(notifications) {
    return <div > you look {
        notifications.length
    } < /div>
}

// sample usage (do not modify)
const notifications = [{
    id: 1,
    text: "Your order has been delivered"
}, {
    id: 2,
    text: "Your coupon code has expired"
}];
const element = getNotifications(notifications);
console.log(element);
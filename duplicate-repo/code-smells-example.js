class UserService {
  createUser(user) {
    console.log(`Creating user: ${user.name}`);
  }

  saveToDatabase(user) {
    console.log(`Saving ${user.name} to the database`);
  }
}

class EmailService {
  sendEmail(user, message) {
    console.log(`Sending email to ${user.email}: ${message}`);
  }
}

class ReportService {
  generateReport(users) {
    console.log(`Generating report for ${users.length} users`);
  }
}

class OrderService {
  calculateTotal(items) {
    return items.reduce((total, item) => total + item.price, 0);
  }
}

module.exports = {
  UserService,
  EmailService,
  ReportService,
  OrderService,
};
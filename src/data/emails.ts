export interface Email {
  id: number;
  sender: string;
  email: string;
  subject: string;
  preview: string;
  body: string;
  time: string;
  category: string;
  categoryColor: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  sentiment: string;
  sentimentEmoji: string;
  confidence: number;
  replied: boolean;
  archived: boolean;
  deleted: boolean;
  entities: string[];
  recommendedAction: string;
  customerHistory: string;
  replyV1: string;
  replyV2: string;
  sentReply?: string;
}

export const emailData: Email[] = [
  {
    id: 1,
    sender: "Sarah Johnson",
    email: "sarah@techcorp.com",
    subject: "Still waiting for my refund - Order 4521",
    preview: "I am extremely frustrated. I returned my order over two weeks ago...",
    body: "Hi Support Team,\n\nI am extremely frustrated. I returned my order number 4521 over two weeks ago and I still have not received my refund. I have sent three emails with no proper response. This is completely unacceptable. I need this resolved today or I will be disputing the charge with my bank. Please escalate this immediately.",
    time: "2m ago",
    category: "Refund Request",
    categoryColor: "#EF4444",
    priority: "HIGH",
    sentiment: "Angry",
    sentimentEmoji: "😠",
    confidence: 96,
    replied: false,
    archived: false,
    deleted: false,
    entities: ["Order 4521", "Refund", "2 weeks", "Escalate"],
    recommendedAction: "Immediate escalation to billing team. Process refund within 24 hours.",
    customerHistory: "3 previous tickets",
    replyV1: "Dear Sarah, I sincerely apologize for this unacceptable delay. I have immediately escalated your refund for Order 4521 to our finance team with urgent status. Your refund will be processed within 24 hours and you will receive a confirmation email shortly. I am personally monitoring this case. Thank you for your continued patience. Best regards, Support Team",
    replyV2: "Hi Sarah, I completely understand your frustration and I am truly sorry for this experience. I have located Order 4521 and can confirm your refund is being processed right now as a priority case. You will see it reflected within 1 to 2 business days. I have also added a 15 dollar store credit to your account as an apology. Please let me know if there is anything else I can help with. Best regards, Support Team"
  },
  {
    id: 2,
    sender: "Mike Chen",
    email: "mchen@gmail.com",
    subject: "Wrong item delivered - need replacement",
    preview: "I ordered a Blue Jacket Size M but received a Red Jacket in Size XL...",
    body: "Hello, I placed an order last week for a Blue Jacket, Size M, Order 6732. However I received a Red Jacket in Size XL. I need either the correct item sent or a full refund. Please advise on next steps and arrange a collection for the wrong item.",
    time: "15m ago",
    category: "Order Issue",
    categoryColor: "#F59E0B",
    priority: "HIGH",
    sentiment: "Neutral",
    sentimentEmoji: "😐",
    confidence: 94,
    replied: false,
    archived: false,
    deleted: false,
    entities: ["Order 6732", "Blue Jacket", "Size M", "Replacement"],
    recommendedAction: "Arrange immediate replacement shipment with express delivery.",
    customerHistory: "1 previous ticket",
    replyV1: "Hi Mike, I am sorry for the mix-up with your order. I have arranged an immediate replacement. A Blue Jacket in Size M will be shipped to you with express delivery at no extra cost. You will receive tracking details within 2 hours. You are also welcome to keep the incorrect item. Apologies for the inconvenience. Best regards, Support Team",
    replyV2: "Dear Mike, Thank you for bringing this to our attention. I have processed a full replacement for Order 6732. The correct item will arrive within 2 business days. A prepaid return label for the wrong item has been emailed to you. If you would prefer a full refund instead please let me know and I will process it immediately. Best regards, Support Team"
  },
  {
    id: 3,
    sender: "Priya Sharma",
    email: "priya.s@startup.io",
    subject: "Question about upgrading to Premium Plan",
    preview: "I am currently on the Basic plan and really enjoying the service...",
    body: "Hi there, I am currently on the Basic plan and really enjoying the service. I would like to understand what additional features come with the Premium plan and whether it includes team access. We are a team of 5 and might want to upgrade together. What are the pricing options for a team?",
    time: "32m ago",
    category: "General Inquiry",
    categoryColor: "#10B981",
    priority: "LOW",
    sentiment: "Positive",
    sentimentEmoji: "😊",
    confidence: 91,
    replied: false,
    archived: false,
    deleted: false,
    entities: ["Basic Plan", "Premium Plan", "Team of 5", "Pricing"],
    recommendedAction: "Send Premium plan details and offer a team discount or free trial.",
    customerHistory: "0 previous tickets",
    replyV1: "Hi Priya, So glad you are enjoying the service. The Premium Plan includes unlimited usage, priority support, advanced analytics dashboard, team collaboration for up to 10 members, API access, and custom branding. For a team of 5 the monthly cost is 49 dollars. I would love to schedule a quick 15 minute demo to walk you through everything. Shall I send a calendar link? Best regards, Support Team",
    replyV2: "Hello Priya, Great to hear from you. Upgrading to Premium unlocks team workspaces, advanced AI features, white-label options, and dedicated account management. For 5 users we offer a special team rate of 39 dollars per month which is a 20 percent saving. I can also set up a free 14-day trial for your whole team so you can experience it before committing. Would you like me to arrange that? Best regards, Support Team"
  },
  {
    id: 4,
    sender: "Tom Wilson",
    email: "twilson@company.com",
    subject: "Charged twice for Order 7823 - URGENT",
    preview: "Your system has charged my credit card twice for the same order...",
    body: "Your system has charged my credit card twice for Order 7823. I can see two identical charges of 89.99 dollars on my statement dated today. This is a serious issue and I want the duplicate charge reversed immediately. I have the bank statement as proof. Please resolve this urgently as I need the funds available.",
    time: "1h ago",
    category: "Billing Problem",
    categoryColor: "#F59E0B",
    priority: "HIGH",
    sentiment: "Angry",
    sentimentEmoji: "😠",
    confidence: 98,
    replied: false,
    archived: false,
    deleted: false,
    entities: ["Order 7823", "89.99 dollars", "Duplicate charge", "Refund"],
    recommendedAction: "Immediately initiate refund of duplicate charge and send confirmation.",
    customerHistory: "2 previous tickets",
    replyV1: "Dear Tom, I sincerely apologize for this billing error. I have confirmed the duplicate charge on Order 7823 and have immediately initiated a full refund of 89.99 dollars to your card. It will reflect within 3 to 5 business days depending on your bank. I have also flagged this for our technical team to prevent recurrence. A refund confirmation email is being sent to you right now. Best regards, Support Team",
    replyV2: "Hi Tom, I am very sorry for this inconvenience. I can confirm both charges and have reversed the duplicate 89.99 dollar payment immediately. You will see the refund in 2 to 3 business days. As an apology I have also added a 20 dollar credit to your account. Our billing team has been notified to investigate the root cause. Thank you for flagging this so quickly. Best regards, Support Team"
  },
  {
    id: 5,
    sender: "Emily Davis",
    email: "emily.davis@yahoo.com",
    subject: "App keeps crashing on login screen",
    preview: "I have been having issues with your mobile app for the past 3 days...",
    body: "Hi, I have been having issues with your mobile app for the past 3 days. Every time I try to log in the app freezes for about 5 seconds and then crashes. I have tried uninstalling and reinstalling but the problem persists. I am using an iPhone 14 Pro running iOS 17.2. This is preventing me from accessing my account entirely. Please help as soon as possible.",
    time: "2h ago",
    category: "Technical Support",
    categoryColor: "#6366F1",
    priority: "MEDIUM",
    sentiment: "Negative",
    sentimentEmoji: "☹️",
    confidence: 93,
    replied: false,
    archived: false,
    deleted: false,
    entities: ["iPhone 14 Pro", "iOS 17.2", "Login crash", "3 days"],
    recommendedAction: "Provide iOS 17 workaround and flag to engineering team for hotfix.",
    customerHistory: "1 previous ticket",
    replyV1: "Hi Emily, I am sorry you are experiencing this. Our engineering team has identified a crash bug affecting iOS 17.2 users and a fix is being released today as version 2.4.1. In the meantime please try going to Settings, then Clear Cache, then restarting the app. This resolves the issue for most users. I will personally email you once the update is live. Thank you for your patience. Best regards, Support Team",
    replyV2: "Dear Emily, Thank you for the detailed report. We are aware of a login issue on iOS 17 and our team is pushing a hotfix within 24 hours. As a workaround you can access your account via our web app. I have also escalated your case to priority status and you will receive an App Store update notification once it is fixed. Best regards, Support Team"
  },
  {
    id: 6,
    sender: "James Lee",
    email: "james.lee@gmail.com",
    subject: "Third delayed delivery - considering canceling",
    preview: "This is the third time in a row that my delivery has been delayed...",
    body: "This is absolutely unacceptable. This is the third time in a row that my delivery has been delayed with no notification. I ordered on the 1st, it was supposed to arrive on the 5th, it is now the 9th and I have no tracking update. I am seriously considering canceling my subscription and leaving a public review about this experience.",
    time: "3h ago",
    category: "Complaint",
    categoryColor: "#8B5CF6",
    priority: "HIGH",
    sentiment: "Angry",
    sentimentEmoji: "😠",
    confidence: 97,
    replied: false,
    archived: false,
    deleted: false,
    entities: ["3rd delay", "Order date 1st", "No tracking", "Cancel threat"],
    recommendedAction: "Immediate retention response. Escalate to logistics and offer compensation.",
    customerHistory: "4 previous tickets",
    replyV1: "Dear James, I completely understand your frustration and I sincerely apologize for three consecutive delivery failures. This is not the standard we hold ourselves to. I have located your order and escalated it to our logistics partner as urgent. Your delivery will arrive tomorrow before 6 PM. I would also like to offer you 2 months of free subscription as compensation for this experience. A senior manager will call you today. We truly value your loyalty. Best regards, Support Team",
    replyV2: "Hi James, I am truly sorry for these repeated failures. I have assigned your case to our retention specialist who will contact you within the hour. Your order is now priority-flagged with our courier. I would like to offer you a full refund on this order and one free month of subscription as compensation. Please give us the opportunity to make this right. Best regards, Support Team"
  },
  {
    id: 7,
    sender: "Rachel Green",
    email: "rgreen@enterprise.co",
    subject: "Need GST invoice for bulk order 9901",
    preview: "We placed a bulk order last month and need the official invoice...",
    body: "Hello, We placed a bulk order last month, Order 9901 totaling 2340 dollars, and need the official GST invoice for our accounting department. Could you please send it to accounts@enterprise.co? We need it by end of day today for our quarterly filing. Thank you.",
    time: "5h ago",
    category: "General Inquiry",
    categoryColor: "#10B981",
    priority: "LOW",
    sentiment: "Positive",
    sentimentEmoji: "😐",
    confidence: 89,
    replied: true,
    archived: false,
    deleted: false,
    entities: ["Order 9901", "2340 dollars", "GST Invoice", "accounts@enterprise.co"],
    recommendedAction: "Generate and send GST invoice to the specified accounting email.",
    customerHistory: "0 previous tickets",
    replyV1: "Hi Rachel, Of course. I have generated the GST invoice for Order 9901 totaling 2340 dollars and sent it to accounts@enterprise.co right now. You should receive it within a few minutes. If you need any changes to the invoice details or require a different format please reply here and I will regenerate it immediately. Happy to help with your quarterly filing. Best regards, Support Team",
    replyV2: "Dear Rachel, The GST invoice for Order 9901 has been emailed to accounts@enterprise.co and I have also copied your registered email address. The invoice includes a full GST breakdown. If you need additional PO details added or a different file format please let me know immediately. Best regards, Support Team",
    sentReply: "Hi Rachel, Of course. I have generated the GST invoice for Order 9901 totaling 2340 dollars and sent it to accounts@enterprise.co right now. You should receive it within a few minutes. Best regards, Support Team"
  },
  {
    id: 8,
    sender: "David Park",
    email: "dpark@smallbiz.com",
    subject: "How to fix Invalid API scope error in Shopify integration",
    preview: "I recently signed up and I am getting an error with the Shopify integration...",
    body: "Hi team, I recently signed up for the Business plan and I am trying to integrate your platform with my Shopify store. I followed the documentation but I am getting an error that says Invalid API scope. I have triple-checked my API keys and they appear correct. My store URL is mystore.myshopify.com. Any idea what might be causing this?",
    time: "8h ago",
    category: "Technical Support",
    categoryColor: "#6366F1",
    priority: "MEDIUM",
    sentiment: "Positive",
    sentimentEmoji: "😐",
    confidence: 92,
    replied: false,
    archived: false,
    deleted: false,
    entities: ["Shopify", "Invalid API scope", "Business Plan", "mystore.myshopify.com"],
    recommendedAction: "Provide API scope configuration steps and offer a setup call.",
    customerHistory: "0 previous tickets",
    replyV1: "Hi David, Welcome aboard. The Invalid API scope error means the Shopify API key needs the read orders and write orders scope enabled. To fix this go to Shopify Admin, then Apps, then API credentials, then Edit scopes, and enable both read and write for Orders. Then regenerate your API key and paste the new one in our dashboard. That should resolve it immediately. Let me know if you need any help and I am happy to jump on a screen share. Best regards, Support Team",
    replyV2: "Hey David, Great question and this is a common one. That error means your Shopify app is missing required permissions. Quick fix: first go to your Shopify Partners dashboard, then find your app and click Edit, then go to App Setup, then add read orders, write orders, and read customers under Scopes, and finally reinstall the app on your store. Takes about 2 minutes. I can also hop on a quick call to walk you through it if you would prefer. Best regards, Support Team"
  }
];

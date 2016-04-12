class UserMailer < ApplicationMailer

	def contact_form(user)
		@user = user
		mail to: "info@yarkukhtin.com", from: "yar.kukhtin@gmail.com", subject: "My Website - New Email!"
	end

	def confirmation(user)
		@user = user
		mail to: user[:email], from: "info@yarkukhtin.com", subject: "Email Confirmation"
	end
end

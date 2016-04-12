class UserMailer < ApplicationMailer

	def contact_form(user)
		@user = user
		mail to: "info@yarkukhtin.com", from: "yar.kukhtin@gmail.com", subject: "My Website - New Email!"
	end
end

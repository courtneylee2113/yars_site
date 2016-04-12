class VisitorController < ApplicationController
	def index
		@projects = Project.all
	end

	def contact_form
		user = {
			full_name: params[:contact][:full_name],
			email: params[:contact][:email],
			body: params[:contact][:body]
		}
		if UserMailer.contact_form(user).deliver_now
			UserMailer.confirmation(user).deliver_now
			redirect_to root_path, notice: 'Email Sent!'
		else
			redirecto_to root_path, notice: 'Email NOT Sent!'
		end
	end

	def show_project
		puts "Params: #{params}"
		@project = Project.find(params[:id])
	end
end

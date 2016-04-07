class VisitorController < ApplicationController
	def index
		@projects = Project.all
	end
end

class Project < ActiveRecord::Base
	mount_uploader :base_image, AvatarUploader
	mount_uploader :gif_image, AvatarUploader
end
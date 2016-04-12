class AddGifImageToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :gif_image, :string
  end
end

class AddBaseImageToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :base_image, :string
  end
end

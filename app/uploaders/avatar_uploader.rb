# encoding: utf-8

class AvatarUploader < CarrierWave::Uploader::Base

  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  # include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  # storage :file
  storage :fog

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url
  #   # For Rails 3.1+ asset pipeline compatibility:
  #   # ActionController::Base.helpers.asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
  #
  #   "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  # end

  # Process files as they are uploaded:
  # process :scale => [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # def resize_to_fit(width, height)

  # end
  def resize_to_fit(width, height, combine_options: {})
    manipulate! do |img|
      img.combine_options do |cmd|
        cmd.resize "#{width}x#{height}"
        append_combine_options cmd, combine_options
      end
      img = yield(img) if block_given?
      img
    end
  end

  # Create different versions of your uploaded files:
  version :thumb do
    process :resize_to_fit => [50, 50]
  end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_white_list
    %w(jpg jpeg gif png)
  end

  def manipulate!
    cache_stored_file! if !cached?
    image = ::MiniMagick::Image.open(current_path)

    begin
      image.format(@format.to_s.downcase, @page) if @format
      image = yield(image)
      image.write(current_path)

      if @format
        move_to = current_path.chomp(File.extname(current_path)) + ".#{@format}"
        file.move_to(move_to, permissions, directory_permissions)
      end

      image.run_command("identify", current_path)
    ensure
      image.destroy!
    end
  rescue ::MiniMagick::Error, ::MiniMagick::Invalid => e
    default = I18n.translate(:"errors.messages.mini_magick_processing_error", :e => e, :locale => :en)
    message = I18n.translate(:"errors.messages.mini_magick_processing_error", :e => e, :default => default)
    raise CarrierWave::ProcessingError, message
  end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  # def filename
  #   "something.jpg" if original_filename
  # end

  private

    def append_combine_options(cmd, combine_options)
      combine_options.each do |method, options|
        cmd.send(method, options)
      end
    end

end

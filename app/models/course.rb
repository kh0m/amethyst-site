require 'zip'

class Course < ActiveRecord::Base
  validates :title, presence: true, length: {minimum: 5}
  validates :file, presence: true
  has_many :enrollments
  has_many :users, through: :enrollments

  def upload(file)
    if File.extname(file.path) == '.zip'
      # unzip
      Zip::File.open(file.to_io) do |zip_file|
        zip_file.each do |entry|
          f_path = File.join('public', 'uploads', File.basename(file.original_filename, '.*'), entry.name)
          FileUtils.mkdir_p(File.dirname(f_path))
          zip_file.extract(entry, f_path) unless File.exist?(f_path)
        end
      end
      self.file = "/uploads/#{File.basename(file.original_filename, '.*')}/index.html"
      self.save
    else
      File.open(Rails.root.join('public', 'uploads', file.original_filename), 'wb') do |f|
        f.write(file.read)
      end
      path = "/uploads/#{file.original_filename}/index.html"
      self.file = path
      self.save
    end
  end

end

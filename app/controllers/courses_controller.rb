class CoursesController < ApplicationController
    def index
      @courses = Course.all
    end

    def show
      @client = Client.find(params[:client_id])
      @course = @client.courses.find(params[:id])
    end

    def new
      @course = Course.new
    end

    def edit
      @course = Course.find(params[:id])
    end

    def create
      # create new course record with current user as a user
      @course = Course.create(course_params)

      @course.file = params[:course][:file].path

      @user = User.find_by_email(session[:userinfo].info.email)
      @course.users.push(@user)

      upload

      @course.save

      redirect_to user_path(@user.id)
    end

    def update
      @course = Course.find(params[:id])
      if @course.update(course_params)
        redirect_to @course
      else
        render 'edit'
      end
    end

    def destroy
      @course = Course.find(params[:id])
      @client = @course.client
      @course.destroy
      redirect_to client_path(@client.id)
    end


    private
      def course_params
        params.require(:course).permit(:title, :file)
      end

      def upload
        uploaded_io = params[:course][:file]
        File.open(Rails.root.join('public', 'uploads',
         uploaded_io.original_filename), 'wb') do |file|
          file.write(uploaded_io.read)
        end
      end
end

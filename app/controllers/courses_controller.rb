class CoursesController < ApplicationController
    def index
      @courses = Course.all
    end

    def show
      @client = Client.find(params[:client_id])
      @course = @client.courses.find(params[:id])
    end

    def new
      @user = User.find(params[:user_id])
      @course = Course.new
    end

    def edit
      @course = Course.find(params[:id])
    end

    def create
      @user = User.find(params[:user_id])
      @course = @user.courses.create(course_params)

      @course.file = params[:course][:file].path
      upload

      if @course.save
        redirect_to user_path(@user.id)
      else
        render json: @course.errors.to_json
      end
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

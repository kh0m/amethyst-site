class CoursesController < ApplicationController
    def show
      @course = Course.find(params[:id])
    end

    def new
      @course = Course.new
    end

    def edit
      @course = Course.find(params[:id])
    end

    def create
      @client = Client.find(params[:client_id])
      @course = @client.courses.create(course_params)
      if @course.save
        redirect_to @course
      else
        render 'new'
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
      @course.destroy
      redirect_to courses_path
    end

    private
      def course_params
        params.require(:course).permit(:title, :text)
      end
end

class CoursesController < ApplicationController
    def index
      @courses = Course.all
    end

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
      @course = Course.create(course_params)

      if @course.save
        @course.upload(params[:course][:file])
        redirect_to courses_path
      else
        render 'new'
      end
    end

    def update
      @course = Course.find(params[:id])
      if @course.user_ids = params[:course][:users]
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

    def index_chart
      @courses = Course.all

      render json: { data: @courses.map{ |c| { title: c.title, users: c.users.count } } }

    end


    private
      def course_params
        params.require(:course).permit(:title, :file)
      end

end

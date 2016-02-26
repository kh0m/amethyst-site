class EnrollmentsController < ApplicationController
  def index
    @enrollment = Enrollment.find_by_course_id(params[:course_id])
  end

  private
    def enrollment_params
      params.require(:enrollment).permit(:user_id, :course_id)
    end
end

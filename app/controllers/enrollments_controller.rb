class EnrollmentsController < ApplicationController
  def show
    @enrollment = Enrollment.find(params[:user_id, :course_id])
  end
end

class StudentsController < ApplicationController
    def index
        students = Student|.all
        render(json: students, status: 201)
    end
end

const SectionTitle = ({ heading, subHeading, text, portfolio }) => {
  return (
    <div className="row section-heading">
      <div className="col-lg-12">
        <h6>
          <span>{subHeading}</span>
        </h6>
        <h3>
          <span>{heading}</span>
        </h3>
        {text && (
          <p>
            <b>React.js:</b> {text}
          </p>
        )}
        {portfolio === false && (
          <>
            <div className="mt-2">
              <h5 style={{ textDecoration: "underline" }}>Admin Dashboard</h5>
              <p>
                <b>Description: </b> Developed a centralized interface allowing
                users to punch in and out for attendance tracking. Implemented
                various widgets including Task, Leads, File Manager, Comments,
                Issue Pending Approvals, Accounts Overview, Finance Overview,
                and Purchase Order for streamlined management and monitoring of
                company activities.
              </p>
              <h5 className="mt-2">(i). Attendance Tracking</h5>
              <p>
                <span>Punch In Requirements:</span> Employees can only punch in
                if a project is present. This requires checking that the user
                has a project assigned before allowing the punch-in action.
              </p>
              <p>
                <span>Location-Based Punch-Out: </span>If an employee is out of
                the location, they must provide a reason for their absence.
                Implement a form or modal that appears when attempting to punch
                out, requiring the employee to fill in the reason.
              </p>
            </div>
            <div className="mt-2">
              <h5>(ii). Task Budget Widget</h5>
              <p>
                <span> * Percentage of Completed Tasks:</span> Shows the
                proportion of tasks marked as completed.
              </p>
              <p>
                <span>* In-Progress Tasks:</span> Displays the percentage of
                tasks that are currently in progress.
              </p>
              <p>
                <span>* Delayed Tasks:</span> Indicates the percentage of tasks
                that are overdue.
              </p>
              <p>
                <span>* Not Started Tasks:</span> Shows the percentage of tasks
                that haven’t been started yet.
              </p>
            </div>
            <div className="mt-2">
              <h5>(iii). Comments Widget</h5>
              <p>
                <span>* Project-Specific Comments:</span> Users can only view
                comments relevant to the projects they are involved in.
              </p>
              <p>
                <span>* Implementation:</span> Filter comments based on the
                user's project associations. Ensure that comments are linked to
                projects and that the comment viewing logic checks the user's
                involvement before displaying comments.
              </p>
            </div>
            <div className="mt-2">
              <h5>(iv). Finance Overview Widget</h5>
              <p>
                <span>* Line Chart</span> Visualize income and loss data over
                time using a line chart.
              </p>
              <p>
                <span>* Implementation:</span> Use a charting library google
                chart to render the line chart. Ensure the chart data is updated
                regularly to reflect recent financial transactions.
              </p>
            </div>

            <div className="mt-3">
              <h5 style={{ textDecoration: "underline" }}>
                MOM(Minutes of Meeting)
              </h5>
              <p>
                As part of my project work, I developed a comprehensive Minutes
                of Meeting (MOM) feature integrated with React Quill, a powerful
                rich text editor. This feature facilitates efficient note-taking
                during meetings, allowing for detailed documentation and
                enhanced collaboration <b>Key functionalities include:</b>
              </p>

              <p>
                {" "}
                <b>(i)</b>{"  "}Rich Text Editing: Leveraged React Quill to provide a
                robust text editor that supports various formatting options such
                as bold, italics, underline, bullet points, numbered lists, and
                more. This ensures that meeting notes are clear, organized, and
                visually appealing.
              </p>
              <p>
                <b>(ii)</b>{"  "}Task Creation with Employee Assignment: Introduced a
                dynamic task creation system where users can type # to create
                tasks within the MOM. A dropdown menu appears to select and
                assign these tasks to specific employees, streamlining task
                management and follow-up.
              </p>
              <p>
                <b>(iii)</b>{"  "} Table Insertion and Management: Enabled users
                to insert tables directly within the MOM notes. This feature
                supports adding and formatting rows and columns, making it easy
                to structure data and action items effectively.
              </p>
            </div>
            <div className="mt-3">
              <h5 style={{ textDecoration: "underline" }}>
              Project Dashboard
              </h5>
              <p>
                I developed a comprehensive Project Dashboard designed to
                provide a centralized view of all project-related details,
                enhancing project management and collaboration. The dashboard{" "}
                <b>includes several key features:</b>
              </p>

              <p>
                
                <b>(i)</b>{"  "}Comments on the Project: Implemented a commenting
                system where team members can leave comments on specific tasks
                or the project as a whole. This facilitates better communication
                and collaboration within the team
              </p>
              <p>
                <b>(ii)</b>{"  "}Tasks of the Project: Integrated a task management
                module that displays all tasks associated with the project.
                Users can view, create, and assign tasks, track their progress,
                and mark them as complete.
              </p>
              <p>
                <b>(iii)</b>{"  "}Pending Approvals: Added a section for pending
                approvals, ensuring that all necessary approvals for the project
                are visible and can be addressed promptly. This helps in
                maintaining the workflow and avoiding bottlenecks.
              </p>
              <p>
                <b>(iv)</b>{"  "}Issues of the Project: Developed an issue tracking
                system that lists all project-related issues. This feature
                allows team members to report, view, and manage issues, ensuring
                that problems are addressed in a timely manner.
              </p>
            </div>
            <div className="mt-2">
              <h5 style={{ textDecoration: "underline" }}>
                Account / Bookkeeping:
              </h5>
              <p>
                <b>Description: </b> Developed the Account module as part of an
                ERP SaaS product tailored for architect and interior design
                firms. This module streamlines financial management and
                accounting processes within the firms, providing comprehensive
                tools for handling their financial operations.
              </p>
              <p>
                <b>Features: </b> Invoice Management, Expense Tracking,
                Budgeting, Financial Reporting, Client and Vendor Management,
                Payment Processing, Tax Management, Multi-Currency Support,
                Audit Trail
              </p>
            </div>
            <div className="mt-2">
              <h5 style={{ textDecoration: "underline" }}>
                Timeline & Task Manager
              </h5>
              <p>
                <b>Description: </b> Developed the Timeline and Task Manager
                modules as integral components of an ERP SaaS product for
                architect and interior design firms. These modules are designed
                to enhance project management and streamline task coordination,
                ensuring efficient workflow and productivity
              </p>
              <p>
                <b>Features: </b> The Timeline module includes project
                milestones, Gantt chart integration, a timeline view of tasks
                and events, drag-and-drop scheduling, deadline tracking,
                dependencies and predecessors, real-time updates and
                notifications, and historical data access. The Task Manager
                module offers task creation and assignment, prioritization and
                status tracking, subtask management, due dates and reminders,
                task comments and collaboration, progress indicators,
                customizable tags and labels, and time tracking and reporting
              </p>
              <p className="mt-2">
                <b>Additional Work in idesign.market:</b> Purchase Order,
                Chat, and Accounts
              </p>
            </div>
            {/* backend project */}
            <h4 className="mt-5">Backend Projects</h4>
            <div>
              <h5 style={{ textDecoration: "underline" }}>Task Manager</h5>
              <p>
                <b>Description: </b> A RESTful API for managing tasks. Users can
                create, read, update, and delete tasks. The application should
                include user authentication and authorization.
              </p>
              <p>
                <b>Features: </b> User registration and login (JWT
                authentication), CRUD operations for tasks, Task categories and
                priorities, Task deadlines and reminders, User profile
                management
              </p>
            </div>
            {/* <div className="mt-2">
              <h5 style={{ textDecoration: "underline" }}>E-commerce</h5>
              <p>
                <b>Description: </b> A backend API for an e-commerce platform.
                This project involves creating APIs for product management, user
                authentication, order processing, and payment integration.
              </p>
              <p>
                <b>Features: </b> User registration and login (JWT
                authentication), CRUD operations for products, Shopping cart
                functionality, Order management (create, update, view orders),
                Payment integration razorPay, User profile management
              </p>
            </div> */}
            <div className="mt-2">
              <h5 style={{ textDecoration: "underline" }}>
                Event Booking System
              </h5>
              <p>
                <b>Description: </b> An application for booking events. Users
                can browse events, book tickets, and manage their bookings.
              </p>
              <p>
                <b>Features: </b> User registration and login (JWT
                authentication), CRUD operations for events, Event search and
                filtering, Ticket booking and payment integration, view orders),
                Booking management (view, cancel bookings), Event organizer
                profiles
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default SectionTitle;

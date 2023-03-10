import AssignmentLayout from './assignmentLayout'
import assignmentsInfo from './assignmentsInfo'

export default function PortfolioProject({ params }) {
  const assignment = assignmentsInfo[params.id]

  return (
    <AssignmentLayout
      number= {params.id}
      description={assignment.description}
      githubLink={assignment.githubLink}
      vercelLink={assignment.vercelLink}
    />
  )
}

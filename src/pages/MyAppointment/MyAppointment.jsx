import { styled } from "styled-components";
import useAppointments from "../../hooks/useAppointments";
import QUERIES from "../../constants/Queries";
import removeAppointment from "../../utils/removeAppointment";
import updateAppointment from "../../utils/updateAppointment";
const MyAppointment = () => {
  const [treatments, setTreatments] = useAppointments();

  const handleDelete = async (id) => {
    try {
      const response = await removeAppointment(id);
      const result = await response.json();

      if (result.deletedCount > 0) {
        setTreatments((prev) => prev.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdate = async (item) => {
    const index = treatments.indexOf(item);
    const arr = [...treatments];
    arr[index].status = true;

    try {
      const response = await updateAppointment(item._id, { status: true });
      const result = await response.json();
      if (result.modifiedCount) {
        setTreatments(arr);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Wrapper>
      <Title>My Appointments</Title>

      {treatments?.length > 0 ? (
        <Appointments>
          {treatments?.map((item) => (
            <Appointment key={item._id}>
              <div>
                <h3>Name: {item?.patient?.name}</h3>
                <h4>Treatment: {item?.data?.cardTitle}</h4>
              </div>
              <div>
                <h2>
                  Time: {item?.data?.timeStart} - {item?.data?.timeEnd}
                </h2>
                <h2>Date: {item?.date}</h2>
              </div>
              <Buttons>
                <>
                  {item?.status ? (
                    <Approved>Approved</Approved>
                  ) : (
                    <Pending onClick={() => handleUpdate(item)}>
                      Pending
                    </Pending>
                  )}
                </>
                {!item?.status && (
                  <Cancel onClick={() => handleDelete(item._id)}>Cancel</Cancel>
                )}
              </Buttons>
            </Appointment>
          ))}
        </Appointments>
      ) : (
        <Empty>There are no appointment booked</Empty>
      )}
    </Wrapper>
  );
};

export default MyAppointment;

const Title = styled.h2`
  text-align: center;
  font-size: 1.125rem;
  color: var(--clr-green);
  margin-bottom: 1.125rem;
  text-transform: uppercase;
`;
const Empty = styled.h2`
  text-align: center;
  font-size: 1rem;
  color: dodgerblue;
  margin-bottom: 1.125rem;
  text-transform: uppercase;
`;

const Buttons = styled.div`
  display: flex;
  gap: 4px;

  @media ${QUERIES.tabletAndDown} {
    flex-direction: column;
  }
`;

const Appointment = styled.article`
  align-items: center;
  color: #343944;
  justify-content: space-between;
  display: flex;
  border-radius: 6px;
  padding: 0.5rem;
  gap: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  @media ${QUERIES.phoneAndDown} {
    flex-direction: column;
    text-align: center;
  }
`;

const Appointments = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Wrapper = styled.section`
  max-width: 1175px;
  margin-inline: auto;
  padding-inline: 1rem;
`;

const Button = styled.button`
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  border-radius: 0.5rem;
  padding: 8px 14px 7px 15px;
`;

const Pending = styled(Button)`
  background: dodgerblue;
`;
const Cancel = styled(Button)`
  background: #ff0000;
`;
const Approved = styled(Button)`
  background: var(--clr-lin-green);
`;

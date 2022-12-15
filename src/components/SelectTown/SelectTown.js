import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTown, setTownData, setTownState } from "../../redux/actions/index";
import { getSelectedUf, getStateTown } from "../../redux/selectors/index";
import { apiGetTown } from "../../services/apiService";

function SelectTown() {
  const selectedState = useSelector(getSelectedUf);
  const stateTown = useSelector(getStateTown);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getApiTown() {
      try {
        const towns = await apiGetTown(selectedState);
        dispatch(setTownState(towns));
      } catch (error) {
        console.log(error.message);
      }
    }
    dispatch(setTownData([]));
    dispatch(setTownState([]));
    getApiTown();
    
  }, [dispatch,selectedState]);

  function handleTownSelectChange(e) {
    dispatch(setSelectedTown(e.target.value));
  }

  return (
    <div>
      <div>
        {
          stateTown?.length > 0 ? (
            <div className="custom-select" style={{ marginLeft: "50px" }}>
              <span className="arrow active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                </svg>
              </span>
              <select
                name="selectedTown"
                onChange={handleTownSelectChange}
                defaultValue="zero"
              >
                <option value="zero" disabled>
                  Escolha um Municipio
                </option>

                {stateTown?.map((item, id) => {
                  return (
                    <option value={item.id} key={id}>
                      {item.nome}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : null
          
        }
      </div>
    </div>
  );
}

export default SelectTown;

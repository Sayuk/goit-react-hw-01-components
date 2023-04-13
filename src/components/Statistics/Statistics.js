// import PropTypes from 'prop-types';

const Statistics = () => {
const stats = [
  { "id": "id-1", "label": ".docx", "percentage": 22 },
  { "id": "id-2", "label": ".pdf", "percentage": 4 },
  { "id": "id-3", "label": ".mp3", "percentage": 17 },
  { "id": "id-4", "label": ".psd", "percentage": 47 },
  { "id": "id-5", "label": ".pdf", "percentage": 10 }
]
    
        return <section>
            <h2 >Upload stats</h2>
             <ul>
            {stats.map(statistic => (
       
                    <li key={statistic.id}>
                        <span>{statistic.label}</span>
                        <span>{statistic.percentage}</span>
                    </li>         
      
     
            ))}
                  </ul>
 

</section>

};

export default Statistics;


// Statistics.propTypes = {

//     // label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
 
// }



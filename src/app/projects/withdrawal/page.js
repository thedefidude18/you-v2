"use client"
import { useFormik } from 'formik';
import styles from "../Projects.module.css";
import Banner from '@/components/Banner/Banner';

const page = () => {
  const formik = useFormik({
    initialValues: {
      project: 'AfriPGF',
      description: '',
    },
    onSubmit: values => {
      
    },
  });

  return (
    <div >
        <Banner
       text="Request Withdrawal "
        image="/svgs/proj/BannerSvg.svg"
      />
    
    <div className={styles.form_container}>
      <form onSubmit={formik.handleSubmit} >
        <div className= {styles.withdrawal_form}>
        <div className={styles.form_group}>
          <label htmlFor="project">Project</label>
          <input
            id="project"
            name="project"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.project}
            disabled
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="description">Milestone reached - Describe your request</label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
           {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </div>
        </div>
        <div style={{display:"flex",justifyContent:"center",width:"100%"}}>

        <button type="submit" className={styles.submit_button}>Request Withdrawal</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default page;
